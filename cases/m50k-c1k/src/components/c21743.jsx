import React from 'react';
const LABEL_21743 = 'component_21743';
export function Component21743({ value = 21743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21743, 'data-value': derived.doubled }, children);
}
export default Component21743;
