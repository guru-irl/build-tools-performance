import React from 'react';
const LABEL_28532 = 'component_28532';
export function Component28532({ value = 28532, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28532, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28532, 'data-value': derived.doubled }, children);
}
export default Component28532;
