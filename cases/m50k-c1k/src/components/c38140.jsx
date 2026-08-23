import React from 'react';
const LABEL_38140 = 'component_38140';
export function Component38140({ value = 38140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38140, 'data-value': derived.doubled }, children);
}
export default Component38140;
