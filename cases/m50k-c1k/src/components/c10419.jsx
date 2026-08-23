import React from 'react';
const LABEL_10419 = 'component_10419';
export function Component10419({ value = 10419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10419, 'data-value': derived.doubled }, children);
}
export default Component10419;
