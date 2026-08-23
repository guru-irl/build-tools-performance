import React from 'react';
const LABEL_25823 = 'component_25823';
export function Component25823({ value = 25823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25823, 'data-value': derived.doubled }, children);
}
export default Component25823;
