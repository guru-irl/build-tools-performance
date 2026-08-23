import React from 'react';
const LABEL_2608 = 'component_2608';
export function Component2608({ value = 2608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2608, 'data-value': derived.doubled }, children);
}
export default Component2608;
