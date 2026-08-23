import React from 'react';
const LABEL_33033 = 'component_33033';
export function Component33033({ value = 33033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33033, 'data-value': derived.doubled }, children);
}
export default Component33033;
