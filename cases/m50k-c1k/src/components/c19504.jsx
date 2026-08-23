import React from 'react';
const LABEL_19504 = 'component_19504';
export function Component19504({ value = 19504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19504, 'data-value': derived.doubled }, children);
}
export default Component19504;
