import React from 'react';
const LABEL_20581 = 'component_20581';
export function Component20581({ value = 20581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20581, 'data-value': derived.doubled }, children);
}
export default Component20581;
