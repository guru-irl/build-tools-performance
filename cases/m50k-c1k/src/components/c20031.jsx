import React from 'react';
const LABEL_20031 = 'component_20031';
export function Component20031({ value = 20031, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20031, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20031, 'data-value': derived.doubled }, children);
}
export default Component20031;
