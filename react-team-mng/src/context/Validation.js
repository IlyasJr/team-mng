import { number, object, string } from 'yup';


export let validationSchema = object({
    title: string().required('required'),
    description:  string(),
    type: string().required('required'),
    priority:  string().required('required'),
  });


export let filterValidationSchema = object({
  number: number('please enter a number'),
  responsible:  string(),
  type: string(),
  priority:  string(),
});  