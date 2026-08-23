import React from 'react';
const LABEL_4961 = 'component_4961';
export function Component4961({ value = 4961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4961, 'data-value': derived.doubled }, children);
}
export default Component4961;
