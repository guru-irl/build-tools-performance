import React from 'react';
const LABEL_3863 = 'component_3863';
export function Component3863({ value = 3863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3863, 'data-value': derived.doubled }, children);
}
export default Component3863;
