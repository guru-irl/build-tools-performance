import React from 'react';
const LABEL_13416 = 'component_13416';
export function Component13416({ value = 13416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13416, 'data-value': derived.doubled }, children);
}
export default Component13416;
