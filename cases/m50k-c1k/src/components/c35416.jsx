import React from 'react';
const LABEL_35416 = 'component_35416';
export function Component35416({ value = 35416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35416, 'data-value': derived.doubled }, children);
}
export default Component35416;
