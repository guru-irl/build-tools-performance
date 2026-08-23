import React from 'react';
const LABEL_2437 = 'component_2437';
export function Component2437({ value = 2437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2437, 'data-value': derived.doubled }, children);
}
export default Component2437;
