import React from 'react';
const LABEL_23238 = 'component_23238';
export function Component23238({ value = 23238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23238, 'data-value': derived.doubled }, children);
}
export default Component23238;
