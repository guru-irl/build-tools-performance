import React from 'react';
const LABEL_36342 = 'component_36342';
export function Component36342({ value = 36342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36342, 'data-value': derived.doubled }, children);
}
export default Component36342;
