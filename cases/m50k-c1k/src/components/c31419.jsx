import React from 'react';
const LABEL_31419 = 'component_31419';
export function Component31419({ value = 31419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31419, 'data-value': derived.doubled }, children);
}
export default Component31419;
