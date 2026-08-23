import React from 'react';
const LABEL_27372 = 'component_27372';
export function Component27372({ value = 27372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27372, 'data-value': derived.doubled }, children);
}
export default Component27372;
