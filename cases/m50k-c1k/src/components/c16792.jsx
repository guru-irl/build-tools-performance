import React from 'react';
const LABEL_16792 = 'component_16792';
export function Component16792({ value = 16792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16792, 'data-value': derived.doubled }, children);
}
export default Component16792;
