import React from 'react';
const LABEL_26416 = 'component_26416';
export function Component26416({ value = 26416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26416, 'data-value': derived.doubled }, children);
}
export default Component26416;
