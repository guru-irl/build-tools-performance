import React from 'react';
const LABEL_29174 = 'component_29174';
export function Component29174({ value = 29174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29174, 'data-value': derived.doubled }, children);
}
export default Component29174;
