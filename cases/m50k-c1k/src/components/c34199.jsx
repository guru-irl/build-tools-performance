import React from 'react';
const LABEL_34199 = 'component_34199';
export function Component34199({ value = 34199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34199, 'data-value': derived.doubled }, children);
}
export default Component34199;
