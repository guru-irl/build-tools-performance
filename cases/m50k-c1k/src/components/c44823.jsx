import React from 'react';
const LABEL_44823 = 'component_44823';
export function Component44823({ value = 44823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44823, 'data-value': derived.doubled }, children);
}
export default Component44823;
