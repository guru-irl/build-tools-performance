import React from 'react';
const LABEL_2621 = 'component_2621';
export function Component2621({ value = 2621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2621, 'data-value': derived.doubled }, children);
}
export default Component2621;
