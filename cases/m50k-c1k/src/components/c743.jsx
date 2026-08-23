import React from 'react';
const LABEL_743 = 'component_743';
export function Component743({ value = 743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_743, 'data-value': derived.doubled }, children);
}
export default Component743;
