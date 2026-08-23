import React from 'react';
const LABEL_43532 = 'component_43532';
export function Component43532({ value = 43532, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43532, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43532, 'data-value': derived.doubled }, children);
}
export default Component43532;
