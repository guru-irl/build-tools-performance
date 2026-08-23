import React from 'react';
const LABEL_14600 = 'component_14600';
export function Component14600({ value = 14600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14600, 'data-value': derived.doubled }, children);
}
export default Component14600;
