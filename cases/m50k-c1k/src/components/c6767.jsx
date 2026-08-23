import React from 'react';
const LABEL_6767 = 'component_6767';
export function Component6767({ value = 6767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6767, 'data-value': derived.doubled }, children);
}
export default Component6767;
