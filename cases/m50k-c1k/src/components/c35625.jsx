import React from 'react';
const LABEL_35625 = 'component_35625';
export function Component35625({ value = 35625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35625, 'data-value': derived.doubled }, children);
}
export default Component35625;
