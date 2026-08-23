import React from 'react';
const LABEL_26419 = 'component_26419';
export function Component26419({ value = 26419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26419, 'data-value': derived.doubled }, children);
}
export default Component26419;
