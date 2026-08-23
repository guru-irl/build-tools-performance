import React from 'react';
const LABEL_39743 = 'component_39743';
export function Component39743({ value = 39743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39743, 'data-value': derived.doubled }, children);
}
export default Component39743;
