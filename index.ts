interface TaggedEvent {
  [key: string]: string | Object | [];
}

const providedGoogleTagManagerProperties = [
  'action',
  'title',
  'customDimensions',
];

const eventToBeTagged: TaggedEvent = {
  action: 'click',
  title: 'Purchase Macbook',
  customDimensions: {
    products: [
      {
        id: 1,
        name: 'Macbook',
      },
    ],
  },
  ecommerce: {
    product: 'Macbook',
  },
};

const filteredProperties = providedGoogleTagManagerProperties.filter(
  (property) => property in eventToBeTagged
);

console.log(filteredProperties);
