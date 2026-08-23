import React from 'react';
const LABEL_6199 = 'component_6199';
export function Component6199({ value = 6199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6199, 'data-value': derived.doubled }, children);
}
export default Component6199;
