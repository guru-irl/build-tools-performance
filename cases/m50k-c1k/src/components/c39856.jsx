import React from 'react';
const LABEL_39856 = 'component_39856';
export function Component39856({ value = 39856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39856, 'data-value': derived.doubled }, children);
}
export default Component39856;
