import React from 'react';
const LABEL_37757 = 'component_37757';
export function Component37757({ value = 37757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37757, 'data-value': derived.doubled }, children);
}
export default Component37757;
