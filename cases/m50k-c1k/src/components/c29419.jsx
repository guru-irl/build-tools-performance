import React from 'react';
const LABEL_29419 = 'component_29419';
export function Component29419({ value = 29419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29419, 'data-value': derived.doubled }, children);
}
export default Component29419;
