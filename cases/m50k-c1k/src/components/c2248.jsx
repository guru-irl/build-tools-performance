import React from 'react';
const LABEL_2248 = 'component_2248';
export function Component2248({ value = 2248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2248, 'data-value': derived.doubled }, children);
}
export default Component2248;
