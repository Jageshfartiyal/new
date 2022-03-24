import React, {useState} from 'react'
import { Multiselect } from 'multiselect-react-dropdown'

import {IProfileDetails, profileDetailsInitValues as initialValues} from '../Promodel'

import * as Yup from 'yup'
import {useFormik} from 'formik'
import {toAbsoluteUrl } from '../../../../_metronic/helpers'

const profileDetailsSchema = Yup.object().shape({
  pName: Yup.string().required('Project name is required'),
  pID: Yup.string().required('Project ID is required'),
  pLead: Yup.string().required('Project Lead is required'),
  
  language: Yup.string().required('Language is required'),
  timeZone: Yup.string().required('Time zone is required'),
  currency: Yup.string().required('Currency is required'),
})


const ProjectDetail: React.FC = () => {
  const [data, setData] = useState<IProfileDetails>(initialValues)
  const updateData = (fieldsToUpdate: Partial<IProfileDetails>): void => {
    const updatedData = Object.assign(data, fieldsToUpdate)
    setData(updatedData)
  }
  const Meta = [
  {Language:"HTML"},
  {Language:"CSS"},
  {Language:"JavaScript"},
  {Language:"React"},
  {Language:"Node"},
  {Language:"Express"},
  {Language:"MongoDB"}

];
const [options]= useState(Meta);

  const [loading, setLoading] = useState(false)
  const formik = useFormik<IProfileDetails>({
    initialValues,
    validationSchema: profileDetailsSchema,
    onSubmit: (values) => {
      setLoading(true)
    },
  })

  return (
    <div className='card mb-5 mb-xl-10'>
        
      <div
        className='card-header border-0 cursor-pointer'
        role='button'
        data-bs-toggle='collapse'
        data-bs-target='#kt_account_profile_details'
        aria-expanded='true'
        aria-controls='kt_account_profile_details'
      >
        <div className='card-title m-0'>
          <h3 className='fw-bolder m-0'>Project Details</h3>
        </div>
      </div>

      <div id='kt_account_profile_details' className='collapse show'>
        <form onSubmit={formik.handleSubmit} noValidate className='form'>
          <div className='card-body border-top p-9'>
            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>Project Name</label>

              <div className='col-lg-8 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='project name'
                  {...formik.getFieldProps('empid')}
                />
                {formik.touched.pName && formik.errors.pName && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.pName}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>Project ID</label>

              <div className='col-lg-8 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='project id'
                  {...formik.getFieldProps('empid')}
                />
                {formik.touched.pID && formik.errors.pID && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.pID}</div>
                  </div>
                )}
              </div>
            </div>

            

            

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>Languages</span>
              </label>

              <div className='col-lg-8 fv-row'>
                <Multiselect className='form-select form-select-solid form-select-lg'
                 options={options} displayValue={"Language"}/>
                
                {formik.touched.language && formik.errors.language && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.language}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>Project Lead</label>
              <div className='col-lg-8 fv-row'>
                <select
                  className='form-select form-select-solid form-select-lg'
                  {...formik.getFieldProps('designation')}
                >
                  <option value=''>Select the project lead...</option>
                  <option value='id'>Sanjay Gupta</option>
                  <option value='msa'>Tabassum Saifi</option>
                  <option value='ca'>Nikhil Mahato</option>
                </select>
                {formik.touched.pLead && formik.errors.pLead && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.pLead}</div>
                  </div>
                )}

                <div className='form-text'>
                  Please select the project lead
                </div>
              </div>
            </div>

            

            
          </div>

          <div className='card-footer d-flex justify-content-end py-6 px-9'>
            <button type='submit' className='btn btn-primary' disabled={loading}>
              {!loading && 'Add Project'}
              {loading && (
                <span className='indicator-progress' style={{display: 'block'}}>
                  Please wait...{' '}
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export {ProjectDetail}
