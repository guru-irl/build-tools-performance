import React from 'react';
const LABEL_20053 = 'component_20053';
export function Component20053({ value = 20053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20053, 'data-value': derived.doubled }, children);
}
export default Component20053;
