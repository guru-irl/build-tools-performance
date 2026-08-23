import React from 'react';
const LABEL_24743 = 'component_24743';
export function Component24743({ value = 24743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24743, 'data-value': derived.doubled }, children);
}
export default Component24743;
