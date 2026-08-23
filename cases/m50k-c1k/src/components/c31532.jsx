import React from 'react';
const LABEL_31532 = 'component_31532';
export function Component31532({ value = 31532, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31532, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31532, 'data-value': derived.doubled }, children);
}
export default Component31532;
