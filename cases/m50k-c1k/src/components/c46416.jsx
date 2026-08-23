import React from 'react';
const LABEL_46416 = 'component_46416';
export function Component46416({ value = 46416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46416, 'data-value': derived.doubled }, children);
}
export default Component46416;
