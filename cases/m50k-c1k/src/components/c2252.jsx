import React from 'react';
const LABEL_2252 = 'component_2252';
export function Component2252({ value = 2252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2252, 'data-value': derived.doubled }, children);
}
export default Component2252;
