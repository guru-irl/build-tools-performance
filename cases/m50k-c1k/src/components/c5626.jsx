import React from 'react';
const LABEL_5626 = 'component_5626';
export function Component5626({ value = 5626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5626, 'data-value': derived.doubled }, children);
}
export default Component5626;
