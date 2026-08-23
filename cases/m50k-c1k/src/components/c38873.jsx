import React from 'react';
const LABEL_38873 = 'component_38873';
export function Component38873({ value = 38873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38873, 'data-value': derived.doubled }, children);
}
export default Component38873;
