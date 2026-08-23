import React from 'react';
const LABEL_43291 = 'component_43291';
export function Component43291({ value = 43291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43291, 'data-value': derived.doubled }, children);
}
export default Component43291;
