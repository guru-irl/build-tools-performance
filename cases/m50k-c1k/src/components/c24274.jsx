import React from 'react';
const LABEL_24274 = 'component_24274';
export function Component24274({ value = 24274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24274, 'data-value': derived.doubled }, children);
}
export default Component24274;
