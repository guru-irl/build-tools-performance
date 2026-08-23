import React from 'react';
const LABEL_36140 = 'component_36140';
export function Component36140({ value = 36140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36140, 'data-value': derived.doubled }, children);
}
export default Component36140;
