import React from 'react';
const LABEL_15757 = 'component_15757';
export function Component15757({ value = 15757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15757, 'data-value': derived.doubled }, children);
}
export default Component15757;
