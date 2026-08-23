import React from 'react';
const LABEL_21930 = 'component_21930';
export function Component21930({ value = 21930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21930, 'data-value': derived.doubled }, children);
}
export default Component21930;
