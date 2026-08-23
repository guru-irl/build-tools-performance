import React from 'react';
const LABEL_40248 = 'component_40248';
export function Component40248({ value = 40248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40248, 'data-value': derived.doubled }, children);
}
export default Component40248;
