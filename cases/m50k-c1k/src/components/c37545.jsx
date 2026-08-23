import React from 'react';
const LABEL_37545 = 'component_37545';
export function Component37545({ value = 37545, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37545, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37545, 'data-value': derived.doubled }, children);
}
export default Component37545;
