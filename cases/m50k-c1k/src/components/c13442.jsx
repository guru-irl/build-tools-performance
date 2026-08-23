import React from 'react';
const LABEL_13442 = 'component_13442';
export function Component13442({ value = 13442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13442, 'data-value': derived.doubled }, children);
}
export default Component13442;
