import React from 'react';
const LABEL_44039 = 'component_44039';
export function Component44039({ value = 44039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44039, 'data-value': derived.doubled }, children);
}
export default Component44039;
