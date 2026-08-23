import React from 'react';
const LABEL_15062 = 'component_15062';
export function Component15062({ value = 15062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15062, 'data-value': derived.doubled }, children);
}
export default Component15062;
