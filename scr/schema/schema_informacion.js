const { buildSchema } = require('graphql')
const vistas = require('../vistas/vista_informacion')

const schema = buildSchema(`
  type Tcharacteristics {  
    CH_PlanType: String
    CH_PlanSubType: String
    CH_ICC: String
    CH_IMEI: String
    CH_IMSI: String
    product_code: String
    product_description: String
    plan_name: String
    plan_code: String
    plan_description: String
  }

  type TService2Attributes {  
    characteristics: Tcharacteristics
    resource_type: String
    primary_id: String
    contract_id: String
    annex_id: String
    customer_id: String
    customer_type: String
    address: String
    lifecycle_status: String
    lifecycle_code: String
    lifecycle_description: String
    start_datetime: String
  }

  type Tbilling {  
    billing_cycle: String
    invoice_format: String
    billing_day_start: String
    billing_day_end: String
  }

  type Tincluded {  
    attributes: TService2Attributes
    billing_profile: Tbilling
    type: String
  }

  type Tidentifications {  
    identification_type: String
    identification_id: String
  }

  type Tattributes {  
    given_name: String
    formatted_name: String
    family_name: String
    taxation_id: String
    gender: String
    nationality: String
  }  

  type Tcontact {  
    email_address: String
  }

  type Tdata {  
    attributes: Tattributes
    contact_medium: Tcontact
    identifications: Tidentifications
    type: String
  }

  type Tservice {  
    referecePhoneNumber: String
    node: String
    statusNode: String
    ticketId: String
    subscriberId: String
    locationAddress: String
  }
  
  type TserviceList {
    serviceList: [Tservice]
    data: [Tdata]
    included: [Tincluded]
  }

  type Informacion {
    nombre: String
    cuerpo: TserviceList
  }
    type Query {
        getinformation(dpi: String, telefono: String): [Informacion]
    }
`)
/*
const jsondata = [
  {
    nombre: 'profiling',
    cuerpo: {
      serviceList: [
        {
          referecePhoneNumber: '50233120888',
          node: 'JP5554A',
          statusNode: 'OK',
          ticketId: '',
          subscriberId: '14959591',
          locationAddress: 'CALLE LAS BUGANVILIAS CARR A EL SALVADOR NUM 72 COND SANTA ROSALIA LA LAGUNA KM '
        },
        {
          referecePhoneNumber: '50233120888',
          node: 'TO4450A',
          statusNode: 'OK',
          ticketId: '',
          subscriberId: '11197710',
          locationAddress: 'NUM 6 ZONA 5 COL JARDINES DE LA ASUNCION SECT ARCO 3 SECC ACCESO A GUATEMALA,GUA'
        }
      ]
    }
  },
  {
    nombre: 'cassandra',
    cuerpo: {
      data: [
        {
          attributes: {
            given_name: '',
            formatted_name: 'MARIA MAGALY CONTRERAS YAX',
            family_name: '',
            taxation_id: '',
            gender: '',
            nationality: ''
          },
          contact_medium: {
            email_address: 'prb@tigo.com.gt'
          },
          identifications: {
            identification_type: 'DPI',
            identification_id: '2425737110101'
          },
          type: 'individuals'
        }
      ],
      included: [
        {
          attributes: {
            characteristics: {
              CH_PlanType: 'mobile',
              CH_PlanSubType: 'prepaid',
              CH_ICC: '8950202301649600315',
              CH_IMEI: '355903118067749',
              CH_IMSI: '704020317168273',
              product_code: 'P',
              product_description: 'PREPAGO',
              plan_name: 'AMIGO, , ',
              plan_code: '60, , ',
              plan_description: 'AMIGO, , '
            },
            resource_type: 'msisdn',
            primary_id: '50253200998',
            contract_id: '194148',
            annex_id: '61370470',
            customer_id: '55752',
            customer_type: '',
            address: '',
            lifecycle_status: 'active',
            lifecycle_code: 'W',
            lifecycle_description: 'Activo en Domital (PP)',
            start_datetime: '2019-09-19'
          },
          billing_profile: {
            billing_cycle: 'I',
            invoice_format: '',
            billing_day_start: '19',
            billing_day_end: '18'
          },
          type: 'resources'
        }
      ]
    }
  }
]
*/
const root = {
  getinformation: async (data) => {
    const resp = await vistas.createview(data)
    // console.log(JSON.stringify(resp))
    return resp
    // return jsondata
  }
}

module.exports = {
  schema,
  root
}
