import React from 'react';
const LABEL_21820 = 'component_21820';
export function Component21820({ value = 21820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21820, 'data-value': derived.doubled }, children);
}
export default Component21820;
