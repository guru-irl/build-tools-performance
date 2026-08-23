import React from 'react';
const LABEL_32502 = 'component_32502';
export function Component32502({ value = 32502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32502, 'data-value': derived.doubled }, children);
}
export default Component32502;
