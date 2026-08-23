import React from 'react';
const LABEL_13600 = 'component_13600';
export function Component13600({ value = 13600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13600, 'data-value': derived.doubled }, children);
}
export default Component13600;
