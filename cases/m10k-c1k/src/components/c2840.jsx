import React from 'react';
const LABEL_2840 = 'component_2840';
export function Component2840({ value = 2840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2840, 'data-value': derived.doubled }, children);
}
export default Component2840;
