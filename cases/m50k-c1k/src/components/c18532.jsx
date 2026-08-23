import React from 'react';
const LABEL_18532 = 'component_18532';
export function Component18532({ value = 18532, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18532, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18532, 'data-value': derived.doubled }, children);
}
export default Component18532;
