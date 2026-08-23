import React from 'react';
const LABEL_44510 = 'component_44510';
export function Component44510({ value = 44510, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44510, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44510, 'data-value': derived.doubled }, children);
}
export default Component44510;
