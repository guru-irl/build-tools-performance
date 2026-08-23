import React from 'react';
const LABEL_22814 = 'component_22814';
export function Component22814({ value = 22814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22814, 'data-value': derived.doubled }, children);
}
export default Component22814;
