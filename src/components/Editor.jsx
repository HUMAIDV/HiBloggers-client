// eslint-disable-next-line no-unused-vars
import React from 'react'
import  ReactQuill  from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/react-quill'



// eslint-disable-next-line react/prop-types
export default function Editor({value,onChange}) {

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  };
  
  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];
  
  return (
    <ReactQuill value={value} onChange={onChange} modules={modules} formats={formats} />
  )
}

