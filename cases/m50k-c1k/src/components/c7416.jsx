import React from 'react';
const LABEL_7416 = 'component_7416';
export function Component7416({ value = 7416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7416, 'data-value': derived.doubled }, children);
}
export default Component7416;
