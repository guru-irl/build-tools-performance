import React from 'react';
const LABEL_37562 = 'component_37562';
export function Component37562({ value = 37562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37562, 'data-value': derived.doubled }, children);
}
export default Component37562;
