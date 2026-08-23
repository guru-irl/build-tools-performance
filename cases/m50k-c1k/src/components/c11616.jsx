import React from 'react';
const LABEL_11616 = 'component_11616';
export function Component11616({ value = 11616, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11616, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11616, 'data-value': derived.doubled }, children);
}
export default Component11616;
