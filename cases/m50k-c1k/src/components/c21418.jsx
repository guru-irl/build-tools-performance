import React from 'react';
const LABEL_21418 = 'component_21418';
export function Component21418({ value = 21418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21418, 'data-value': derived.doubled }, children);
}
export default Component21418;
