import React from 'react';
const LABEL_7031 = 'component_7031';
export function Component7031({ value = 7031, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7031, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7031, 'data-value': derived.doubled }, children);
}
export default Component7031;
