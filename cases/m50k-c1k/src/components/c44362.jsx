import React from 'react';
const LABEL_44362 = 'component_44362';
export function Component44362({ value = 44362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44362, 'data-value': derived.doubled }, children);
}
export default Component44362;
