import React from 'react';
const LABEL_14607 = 'component_14607';
export function Component14607({ value = 14607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14607, 'data-value': derived.doubled }, children);
}
export default Component14607;
