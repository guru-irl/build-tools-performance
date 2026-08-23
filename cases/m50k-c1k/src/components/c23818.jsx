import React from 'react';
const LABEL_23818 = 'component_23818';
export function Component23818({ value = 23818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23818, 'data-value': derived.doubled }, children);
}
export default Component23818;
