import React from 'react';
const LABEL_10724 = 'component_10724';
export function Component10724({ value = 10724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10724, 'data-value': derived.doubled }, children);
}
export default Component10724;
