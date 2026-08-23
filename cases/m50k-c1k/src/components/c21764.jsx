import React from 'react';
const LABEL_21764 = 'component_21764';
export function Component21764({ value = 21764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21764, 'data-value': derived.doubled }, children);
}
export default Component21764;
