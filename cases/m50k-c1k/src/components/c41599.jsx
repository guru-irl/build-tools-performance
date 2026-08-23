import React from 'react';
const LABEL_41599 = 'component_41599';
export function Component41599({ value = 41599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41599, 'data-value': derived.doubled }, children);
}
export default Component41599;
