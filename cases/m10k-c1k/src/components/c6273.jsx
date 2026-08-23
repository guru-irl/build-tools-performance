import React from 'react';
const LABEL_6273 = 'component_6273';
export function Component6273({ value = 6273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6273, 'data-value': derived.doubled }, children);
}
export default Component6273;
