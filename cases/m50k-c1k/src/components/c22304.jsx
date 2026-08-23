import React from 'react';
const LABEL_22304 = 'component_22304';
export function Component22304({ value = 22304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22304, 'data-value': derived.doubled }, children);
}
export default Component22304;
