import React from 'react';
const LABEL_38416 = 'component_38416';
export function Component38416({ value = 38416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38416, 'data-value': derived.doubled }, children);
}
export default Component38416;
