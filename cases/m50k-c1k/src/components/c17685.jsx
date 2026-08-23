import React from 'react';
const LABEL_17685 = 'component_17685';
export function Component17685({ value = 17685, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17685, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17685, 'data-value': derived.doubled }, children);
}
export default Component17685;
