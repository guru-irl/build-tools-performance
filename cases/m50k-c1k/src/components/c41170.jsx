import React from 'react';
const LABEL_41170 = 'component_41170';
export function Component41170({ value = 41170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41170, 'data-value': derived.doubled }, children);
}
export default Component41170;
