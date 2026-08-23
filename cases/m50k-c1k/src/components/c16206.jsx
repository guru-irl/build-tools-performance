import React from 'react';
const LABEL_16206 = 'component_16206';
export function Component16206({ value = 16206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16206, 'data-value': derived.doubled }, children);
}
export default Component16206;
