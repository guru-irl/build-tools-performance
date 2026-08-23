import React from 'react';
const LABEL_37148 = 'component_37148';
export function Component37148({ value = 37148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37148, 'data-value': derived.doubled }, children);
}
export default Component37148;
