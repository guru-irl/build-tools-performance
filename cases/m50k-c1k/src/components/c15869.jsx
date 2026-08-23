import React from 'react';
const LABEL_15869 = 'component_15869';
export function Component15869({ value = 15869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15869, 'data-value': derived.doubled }, children);
}
export default Component15869;
