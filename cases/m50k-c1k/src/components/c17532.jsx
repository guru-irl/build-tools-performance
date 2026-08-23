import React from 'react';
const LABEL_17532 = 'component_17532';
export function Component17532({ value = 17532, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17532, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17532, 'data-value': derived.doubled }, children);
}
export default Component17532;
