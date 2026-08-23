import React from 'react';
const LABEL_24104 = 'component_24104';
export function Component24104({ value = 24104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24104, 'data-value': derived.doubled }, children);
}
export default Component24104;
