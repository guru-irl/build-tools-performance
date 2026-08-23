import React from 'react';
const LABEL_15793 = 'component_15793';
export function Component15793({ value = 15793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15793, 'data-value': derived.doubled }, children);
}
export default Component15793;
