import React from 'react';
const LABEL_1154 = 'component_1154';
export function Component1154({ value = 1154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1154, 'data-value': derived.doubled }, children);
}
export default Component1154;
