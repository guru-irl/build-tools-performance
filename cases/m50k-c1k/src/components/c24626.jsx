import React from 'react';
const LABEL_24626 = 'component_24626';
export function Component24626({ value = 24626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24626, 'data-value': derived.doubled }, children);
}
export default Component24626;
