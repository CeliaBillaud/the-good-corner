import { gql } from "@apollo/client";

export const GET_ALL_ADS = gql`
  query GetAllAds {
    getAllAds {
      id
      price
      title
      pictureUrl
    }
  }
`;

export const GET_AD_BY_ID = gql`
  query GetAdById($getAdByIdId: Float!) {
    getAdById(id: $getAdByIdId) {
      id
      title
      description
      author
      price
      createdAt
      pictureUrl
    }
  }
`;

export const DELETE_AD = gql`
  mutation DeleteAd($deleteAdId: Float!) {
    deleteAd(id: $deleteAdId)
  }
`;

export const GET_ALL_CATEGORIES = gql`
  query GetAllCategories {
    getAllCategories {
      id
      name
    }
  }
`;
