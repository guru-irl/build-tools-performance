import React from 'react';
const LABEL_15861 = 'component_15861';
export function Component15861({ value = 15861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15861, 'data-value': derived.doubled }, children);
}
export default Component15861;
