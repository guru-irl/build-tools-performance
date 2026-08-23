import React from 'react';
const LABEL_25416 = 'component_25416';
export function Component25416({ value = 25416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25416, 'data-value': derived.doubled }, children);
}
export default Component25416;
