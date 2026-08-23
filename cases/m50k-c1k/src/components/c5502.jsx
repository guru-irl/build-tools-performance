import React from 'react';
const LABEL_5502 = 'component_5502';
export function Component5502({ value = 5502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5502, 'data-value': derived.doubled }, children);
}
export default Component5502;
