import React from 'react';
const LABEL_37097 = 'component_37097';
export function Component37097({ value = 37097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37097, 'data-value': derived.doubled }, children);
}
export default Component37097;
