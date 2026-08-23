import React from 'react';
const LABEL_17716 = 'component_17716';
export function Component17716({ value = 17716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17716, 'data-value': derived.doubled }, children);
}
export default Component17716;
