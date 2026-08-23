import React from 'react';
const LABEL_3405 = 'component_3405';
export function Component3405({ value = 3405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3405, 'data-value': derived.doubled }, children);
}
export default Component3405;
