import React from 'react';
const LABEL_29532 = 'component_29532';
export function Component29532({ value = 29532, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29532, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29532, 'data-value': derived.doubled }, children);
}
export default Component29532;
