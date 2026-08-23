import React from 'react';
const LABEL_45377 = 'component_45377';
export function Component45377({ value = 45377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45377, 'data-value': derived.doubled }, children);
}
export default Component45377;
