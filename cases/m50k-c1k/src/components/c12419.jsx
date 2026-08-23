import React from 'react';
const LABEL_12419 = 'component_12419';
export function Component12419({ value = 12419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12419, 'data-value': derived.doubled }, children);
}
export default Component12419;
