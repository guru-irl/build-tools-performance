import React from 'react';
const LABEL_5488 = 'component_5488';
export function Component5488({ value = 5488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5488, 'data-value': derived.doubled }, children);
}
export default Component5488;
