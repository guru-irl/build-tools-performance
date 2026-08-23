import React from 'react';
const LABEL_24308 = 'component_24308';
export function Component24308({ value = 24308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24308, 'data-value': derived.doubled }, children);
}
export default Component24308;
