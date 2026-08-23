import React from 'react';
const LABEL_8502 = 'component_8502';
export function Component8502({ value = 8502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8502, 'data-value': derived.doubled }, children);
}
export default Component8502;
