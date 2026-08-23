import React from 'react';
const LABEL_11236 = 'component_11236';
export function Component11236({ value = 11236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11236, 'data-value': derived.doubled }, children);
}
export default Component11236;
