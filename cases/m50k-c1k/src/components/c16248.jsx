import React from 'react';
const LABEL_16248 = 'component_16248';
export function Component16248({ value = 16248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16248, 'data-value': derived.doubled }, children);
}
export default Component16248;
