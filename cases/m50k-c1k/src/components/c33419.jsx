import React from 'react';
const LABEL_33419 = 'component_33419';
export function Component33419({ value = 33419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33419, 'data-value': derived.doubled }, children);
}
export default Component33419;
