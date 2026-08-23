import React from 'react';
const LABEL_21502 = 'component_21502';
export function Component21502({ value = 21502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21502, 'data-value': derived.doubled }, children);
}
export default Component21502;
