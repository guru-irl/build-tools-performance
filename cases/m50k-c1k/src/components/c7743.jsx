import React from 'react';
const LABEL_7743 = 'component_7743';
export function Component7743({ value = 7743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7743, 'data-value': derived.doubled }, children);
}
export default Component7743;
