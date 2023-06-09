import * as yup from 'yup';
import { contractValidationSchema } from 'validationSchema/contracts';
import { financialReportValidationSchema } from 'validationSchema/financial-reports';
import { invoiceValidationSchema } from 'validationSchema/invoices';
import { organisationUserValidationSchema } from 'validationSchema/organisation-users';

export const organisationValidationSchema = yup.object().shape({
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
  contract: yup.array().of(contractValidationSchema),
  financial_report: yup.array().of(financialReportValidationSchema),
  invoice: yup.array().of(invoiceValidationSchema),
  organisation_user: yup.array().of(organisationUserValidationSchema),
});
