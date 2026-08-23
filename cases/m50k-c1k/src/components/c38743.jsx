import React from 'react';
const LABEL_38743 = 'component_38743';
export function Component38743({ value = 38743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38743, 'data-value': derived.doubled }, children);
}
export default Component38743;
