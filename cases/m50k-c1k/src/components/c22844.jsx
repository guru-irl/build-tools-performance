import React from 'react';
const LABEL_22844 = 'component_22844';
export function Component22844({ value = 22844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22844, 'data-value': derived.doubled }, children);
}
export default Component22844;
