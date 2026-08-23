import React from 'react';
const LABEL_24127 = 'component_24127';
export function Component24127({ value = 24127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24127, 'data-value': derived.doubled }, children);
}
export default Component24127;
