import React from 'react';
const LABEL_42950 = 'component_42950';
export function Component42950({ value = 42950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42950, 'data-value': derived.doubled }, children);
}
export default Component42950;
