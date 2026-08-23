import React from 'react';
const LABEL_22625 = 'component_22625';
export function Component22625({ value = 22625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22625, 'data-value': derived.doubled }, children);
}
export default Component22625;
