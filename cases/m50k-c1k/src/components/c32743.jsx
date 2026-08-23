import React from 'react';
const LABEL_32743 = 'component_32743';
export function Component32743({ value = 32743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32743, 'data-value': derived.doubled }, children);
}
export default Component32743;
