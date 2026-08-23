import React from 'react';
const LABEL_32419 = 'component_32419';
export function Component32419({ value = 32419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32419, 'data-value': derived.doubled }, children);
}
export default Component32419;
