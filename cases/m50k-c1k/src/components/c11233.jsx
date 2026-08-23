import React from 'react';
const LABEL_11233 = 'component_11233';
export function Component11233({ value = 11233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11233, 'data-value': derived.doubled }, children);
}
export default Component11233;
