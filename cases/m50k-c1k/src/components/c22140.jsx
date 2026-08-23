import React from 'react';
const LABEL_22140 = 'component_22140';
export function Component22140({ value = 22140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22140, 'data-value': derived.doubled }, children);
}
export default Component22140;
