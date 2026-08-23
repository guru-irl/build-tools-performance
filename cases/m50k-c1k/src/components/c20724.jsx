import React from 'react';
const LABEL_20724 = 'component_20724';
export function Component20724({ value = 20724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20724, 'data-value': derived.doubled }, children);
}
export default Component20724;
