import React from 'react';
const LABEL_20607 = 'component_20607';
export function Component20607({ value = 20607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20607, 'data-value': derived.doubled }, children);
}
export default Component20607;
