import React from 'react';
const LABEL_15582 = 'component_15582';
export function Component15582({ value = 15582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15582, 'data-value': derived.doubled }, children);
}
export default Component15582;
