import React from 'react';
const LABEL_42009 = 'component_42009';
export function Component42009({ value = 42009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42009, 'data-value': derived.doubled }, children);
}
export default Component42009;
