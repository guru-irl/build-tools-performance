import React from 'react';
const LABEL_36478 = 'component_36478';
export function Component36478({ value = 36478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36478, 'data-value': derived.doubled }, children);
}
export default Component36478;
