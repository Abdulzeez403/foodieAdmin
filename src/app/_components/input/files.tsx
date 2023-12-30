import React, { useState } from "react";
import { DeleteOutlined, PlusOutlined, StarOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";
import type { RcFile } from "antd/es/upload";
import Image from "next/image"

const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
        console.log(file);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
        console.log(reader);
    });

interface IProps {
    fileList: any[];
    handleChange: (e: any) => void;
}

export const Files: React.FC<IProps> = ({ fileList, handleChange }) => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState("");
    const [previewTitle, setPreviewTitle] = useState("");

    const handleCancel = () => setPreviewOpen(false);

    const handlePreview = async (file: any) => {
        setPreviewImage(file.uri || file.preview || file.thumbUrl);
        setPreviewOpen(true);
        setPreviewTitle(
            file.name || file.uri!.substring(file.uri!.lastIndexOf("/") + 1)
        );
    };

    const uploadButton = (
        <div className="flex gap-4 border-4 items-center px-4 py-2 my-2 rounded-md">
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    return (
        <>
            <Upload
                listType="picture"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
                multiple={true}
                showUploadList={{
                    showDownloadIcon: true,
                    downloadIcon: "Download",
                    showRemoveIcon: true,
                }}
            >
                {fileList?.length >= 8 ? null : uploadButton}
            </Upload>


            <Modal
                open={previewOpen}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
            >
                <Image alt="example" width={200} height={200} src={previewImage} />
            </Modal>
        </>
    );
};


// import React, { useState } from 'react';
// import { Upload } from 'antd';
// import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';

// export const Files: React.FC = () => {
//     const [fileList, setFileList] = useState<UploadFile[]>([]);

//     const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
//         setFileList(newFileList);
//     };

//     const onPreview = async (file: UploadFile) => {
//         let src = file.url as string;
//         if (!src) {
//             src = await new Promise((resolve) => {
//                 const reader = new FileReader();
//                 reader.readAsDataURL(file.originFileObj as RcFile);
//                 reader.onload = () => resolve(reader.result as string);
//             });
//         }
//         const image = new Image();
//         image.src = src;
//         const imgWindow = window.open(src);
//         imgWindow?.document.write(image.outerHTML);
//     };

//     return (
//         <Upload
//             listType="picture-card"
//             fileList={fileList}
//             onChange={onChange}
//             onPreview={onPreview}
//         >
//             {fileList.length < 5 && '+ Upload'}
//         </Upload>
//     );
// };

