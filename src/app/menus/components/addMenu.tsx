'use client'

import ButtonComponent from '@/app/_components/button';
import { ApTextInput } from '@/app/_components/input/TextInput';
import { Files } from '@/app/_components/input/files';
import { UploadProps } from 'antd';
import { Form, Formik, FormikProps } from 'formik';
import React, { useState } from 'react'
import { useMenuContext } from '../context';
import { IMenu } from '../model';

interface IProps {
    singleMenu: IMenu
}
const AddMenu = ({ singleMenu }: IProps) => {

    const [files, setFiles] = useState([]) as any;
    const { addMenu, updateMenu } = useMenuContext();

    console.log(singleMenu, "Updating...")
    console.log(singleMenu?._id, "upate id")


    const handleSubmit = (values: IMenu) => {
        if (singleMenu?._id) {
            updateMenu({
                ...values,
                images: files?.map((f: any) => ({
                    uri: f?.thumbUrl,
                    type: f?.type,
                    name: f?.name,
                })),
            }, singleMenu?._id)
        } else {
            addMenu({
                ...values,
                images: files?.map((f: any) => ({
                    uri: f?.thumbUrl,
                    type: f?.type,
                    name: f?.name,
                })),
            })
        }

    }

    const handleProductImage: UploadProps["onChange"] = ({
        fileList: newFileList,
    }: any) => {
        setFiles(newFileList);
    };
    return (
        <>
            <Formik
                initialValues={{ name: singleMenu?.name || "", description: singleMenu?.description || "", price: singleMenu?.price || "", }}
                // validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {(props: FormikProps<any>) => (
                    <Form >
                        <div className=" ">
                            <h4 className=" font-semibold text-lg">Add Menu</h4>
                        </div>

                        <ApTextInput
                            type="text"
                            label="Name"
                            name="name"
                            placeHolder="name"
                            className=" p-2 rounded-md outline-0 border hover:bg-white hover:"
                        />
                        <ApTextInput
                            type="text"
                            label="Price"
                            name="price"
                            className=" p-2 rounded-md outline-0 border hover:bg-white"
                            placeHolder="price"
                        />
                        <ApTextInput
                            type="textarea"
                            label="Description"
                            name="description"
                            className=" p-2 rounded-md outline-0 border hover:bg-white"
                            placeHolder="Description"
                        />
                        <Files
                            fileList={files}
                            handleChange={(res: any) => handleProductImage(res)}
                        />



                        <ButtonComponent
                            htmlType="submit"
                            type="primary"
                            size="large"
                            className='bg-green-500 w-full text-white rounded-md my-2'>
                            Create Menu
                        </ButtonComponent>
                    </Form>
                )}
            </Formik>


        </>
    )
}



export default AddMenu;
