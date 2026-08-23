import React from 'react';
const LABEL_37389 = 'component_37389';
export function Component37389({ value = 37389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37389, 'data-value': derived.doubled }, children);
}
export default Component37389;
