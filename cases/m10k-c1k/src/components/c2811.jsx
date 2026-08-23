import React from 'react';
const LABEL_2811 = 'component_2811';
export function Component2811({ value = 2811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2811, 'data-value': derived.doubled }, children);
}
export default Component2811;
