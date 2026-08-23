import React from 'react';
const LABEL_24920 = 'component_24920';
export function Component24920({ value = 24920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24920, 'data-value': derived.doubled }, children);
}
export default Component24920;
