import React from 'react';
const LABEL_5616 = 'component_5616';
export function Component5616({ value = 5616, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5616, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5616, 'data-value': derived.doubled }, children);
}
export default Component5616;
