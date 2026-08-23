import React from 'react';
const LABEL_36389 = 'component_36389';
export function Component36389({ value = 36389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36389, 'data-value': derived.doubled }, children);
}
export default Component36389;
