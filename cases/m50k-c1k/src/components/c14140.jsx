import React from 'react';
const LABEL_14140 = 'component_14140';
export function Component14140({ value = 14140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14140, 'data-value': derived.doubled }, children);
}
export default Component14140;
