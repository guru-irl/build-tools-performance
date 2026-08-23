import React from 'react';
const LABEL_15621 = 'component_15621';
export function Component15621({ value = 15621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15621, 'data-value': derived.doubled }, children);
}
export default Component15621;
