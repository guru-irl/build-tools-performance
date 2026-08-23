import React from 'react';
const LABEL_15607 = 'component_15607';
export function Component15607({ value = 15607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15607, 'data-value': derived.doubled }, children);
}
export default Component15607;
