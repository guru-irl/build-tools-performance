import React from 'react';
const LABEL_16722 = 'component_16722';
export function Component16722({ value = 16722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16722, 'data-value': derived.doubled }, children);
}
export default Component16722;
