import React from 'react';
const LABEL_21645 = 'component_21645';
export function Component21645({ value = 21645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21645, 'data-value': derived.doubled }, children);
}
export default Component21645;
