import React from 'react';
const LABEL_16213 = 'component_16213';
export function Component16213({ value = 16213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16213, 'data-value': derived.doubled }, children);
}
export default Component16213;
