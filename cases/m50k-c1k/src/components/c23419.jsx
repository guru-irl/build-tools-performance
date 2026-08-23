import React from 'react';
const LABEL_23419 = 'component_23419';
export function Component23419({ value = 23419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23419, 'data-value': derived.doubled }, children);
}
export default Component23419;
