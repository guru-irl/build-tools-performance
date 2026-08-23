import React from 'react';
const LABEL_37497 = 'component_37497';
export function Component37497({ value = 37497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37497, 'data-value': derived.doubled }, children);
}
export default Component37497;
