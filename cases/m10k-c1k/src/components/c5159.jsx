import React from 'react';
const LABEL_5159 = 'component_5159';
export function Component5159({ value = 5159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5159, 'data-value': derived.doubled }, children);
}
export default Component5159;
