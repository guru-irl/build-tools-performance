import React from 'react';
const LABEL_4416 = 'component_4416';
export function Component4416({ value = 4416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4416, 'data-value': derived.doubled }, children);
}
export default Component4416;
