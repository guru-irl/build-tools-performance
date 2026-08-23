import React from 'react';
const LABEL_7625 = 'component_7625';
export function Component7625({ value = 7625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7625, 'data-value': derived.doubled }, children);
}
export default Component7625;
