import React from 'react';
const LABEL_22094 = 'component_22094';
export function Component22094({ value = 22094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22094, 'data-value': derived.doubled }, children);
}
export default Component22094;
