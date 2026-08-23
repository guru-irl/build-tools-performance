import React from 'react';
const LABEL_15729 = 'component_15729';
export function Component15729({ value = 15729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15729, 'data-value': derived.doubled }, children);
}
export default Component15729;
