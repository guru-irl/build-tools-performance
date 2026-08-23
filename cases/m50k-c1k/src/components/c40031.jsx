import React from 'react';
const LABEL_40031 = 'component_40031';
export function Component40031({ value = 40031, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40031, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40031, 'data-value': derived.doubled }, children);
}
export default Component40031;
