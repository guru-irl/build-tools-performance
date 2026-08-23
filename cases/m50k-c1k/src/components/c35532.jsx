import React from 'react';
const LABEL_35532 = 'component_35532';
export function Component35532({ value = 35532, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35532, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35532, 'data-value': derived.doubled }, children);
}
export default Component35532;
