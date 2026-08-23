import React from 'react';
const LABEL_37685 = 'component_37685';
export function Component37685({ value = 37685, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37685, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37685, 'data-value': derived.doubled }, children);
}
export default Component37685;
