import React from 'react';
const LABEL_6478 = 'component_6478';
export function Component6478({ value = 6478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6478, 'data-value': derived.doubled }, children);
}
export default Component6478;
