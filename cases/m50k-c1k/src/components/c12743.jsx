import React from 'react';
const LABEL_12743 = 'component_12743';
export function Component12743({ value = 12743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12743, 'data-value': derived.doubled }, children);
}
export default Component12743;
