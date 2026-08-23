import React from 'react';
const LABEL_5915 = 'component_5915';
export function Component5915({ value = 5915, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5915, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5915, 'data-value': derived.doubled }, children);
}
export default Component5915;
