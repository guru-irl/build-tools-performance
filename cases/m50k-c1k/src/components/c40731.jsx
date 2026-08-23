import React from 'react';
const LABEL_40731 = 'component_40731';
export function Component40731({ value = 40731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40731, 'data-value': derived.doubled }, children);
}
export default Component40731;
