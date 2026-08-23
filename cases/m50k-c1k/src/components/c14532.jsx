import React from 'react';
const LABEL_14532 = 'component_14532';
export function Component14532({ value = 14532, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14532, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14532, 'data-value': derived.doubled }, children);
}
export default Component14532;
