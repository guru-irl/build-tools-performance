import React from 'react';
const LABEL_20990 = 'component_20990';
export function Component20990({ value = 20990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20990, 'data-value': derived.doubled }, children);
}
export default Component20990;
