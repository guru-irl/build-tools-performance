import React from 'react';
const LABEL_15532 = 'component_15532';
export function Component15532({ value = 15532, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15532, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15532, 'data-value': derived.doubled }, children);
}
export default Component15532;
