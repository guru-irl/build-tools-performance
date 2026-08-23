import React from 'react';
const LABEL_40154 = 'component_40154';
export function Component40154({ value = 40154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40154, 'data-value': derived.doubled }, children);
}
export default Component40154;
