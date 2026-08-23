import React from 'react';
const LABEL_28499 = 'component_28499';
export function Component28499({ value = 28499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28499, 'data-value': derived.doubled }, children);
}
export default Component28499;
