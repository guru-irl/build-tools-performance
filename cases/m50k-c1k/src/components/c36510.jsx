import React from 'react';
const LABEL_36510 = 'component_36510';
export function Component36510({ value = 36510, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36510, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36510, 'data-value': derived.doubled }, children);
}
export default Component36510;
