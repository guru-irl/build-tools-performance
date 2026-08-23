import React from 'react';
const LABEL_15660 = 'component_15660';
export function Component15660({ value = 15660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15660, 'data-value': derived.doubled }, children);
}
export default Component15660;
