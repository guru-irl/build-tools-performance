import React from 'react';
const LABEL_1031 = 'component_1031';
export function Component1031({ value = 1031, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1031, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1031, 'data-value': derived.doubled }, children);
}
export default Component1031;
