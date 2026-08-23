import React from 'react';
const LABEL_16504 = 'component_16504';
export function Component16504({ value = 16504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16504, 'data-value': derived.doubled }, children);
}
export default Component16504;
