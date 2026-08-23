import React from 'react';
const LABEL_41091 = 'component_41091';
export function Component41091({ value = 41091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41091, 'data-value': derived.doubled }, children);
}
export default Component41091;
