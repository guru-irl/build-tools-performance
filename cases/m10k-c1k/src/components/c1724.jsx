import React from 'react';
const LABEL_1724 = 'component_1724';
export function Component1724({ value = 1724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1724, 'data-value': derived.doubled }, children);
}
export default Component1724;
