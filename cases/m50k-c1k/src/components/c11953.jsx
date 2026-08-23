import React from 'react';
const LABEL_11953 = 'component_11953';
export function Component11953({ value = 11953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11953, 'data-value': derived.doubled }, children);
}
export default Component11953;
