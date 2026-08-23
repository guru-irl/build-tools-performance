import React from 'react';
const LABEL_45599 = 'component_45599';
export function Component45599({ value = 45599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45599, 'data-value': derived.doubled }, children);
}
export default Component45599;
