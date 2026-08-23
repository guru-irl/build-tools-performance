import React from 'react';
const LABEL_5140 = 'component_5140';
export function Component5140({ value = 5140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5140, 'data-value': derived.doubled }, children);
}
export default Component5140;
