import React from 'react';
const LABEL_21841 = 'component_21841';
export function Component21841({ value = 21841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21841, 'data-value': derived.doubled }, children);
}
export default Component21841;
