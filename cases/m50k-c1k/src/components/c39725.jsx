import React from 'react';
const LABEL_39725 = 'component_39725';
export function Component39725({ value = 39725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39725, 'data-value': derived.doubled }, children);
}
export default Component39725;
