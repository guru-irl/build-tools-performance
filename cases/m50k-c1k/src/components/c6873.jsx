import React from 'react';
const LABEL_6873 = 'component_6873';
export function Component6873({ value = 6873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6873, 'data-value': derived.doubled }, children);
}
export default Component6873;
