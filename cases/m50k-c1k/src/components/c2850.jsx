import React from 'react';
const LABEL_2850 = 'component_2850';
export function Component2850({ value = 2850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2850, 'data-value': derived.doubled }, children);
}
export default Component2850;
