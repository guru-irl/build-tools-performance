import React from 'react';
const LABEL_3685 = 'component_3685';
export function Component3685({ value = 3685, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3685, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3685, 'data-value': derived.doubled }, children);
}
export default Component3685;
