import React from 'react';
const LABEL_41731 = 'component_41731';
export function Component41731({ value = 41731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41731, 'data-value': derived.doubled }, children);
}
export default Component41731;
