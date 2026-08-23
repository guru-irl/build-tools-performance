import React from 'react';
const LABEL_34860 = 'component_34860';
export function Component34860({ value = 34860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34860, 'data-value': derived.doubled }, children);
}
export default Component34860;
