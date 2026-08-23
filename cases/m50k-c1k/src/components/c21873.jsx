import React from 'react';
const LABEL_21873 = 'component_21873';
export function Component21873({ value = 21873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21873, 'data-value': derived.doubled }, children);
}
export default Component21873;
