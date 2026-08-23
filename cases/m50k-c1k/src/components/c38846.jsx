import React from 'react';
const LABEL_38846 = 'component_38846';
export function Component38846({ value = 38846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38846, 'data-value': derived.doubled }, children);
}
export default Component38846;
