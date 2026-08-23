import React from 'react';
const LABEL_20905 = 'component_20905';
export function Component20905({ value = 20905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20905, 'data-value': derived.doubled }, children);
}
export default Component20905;
