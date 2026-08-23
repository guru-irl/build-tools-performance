import React from 'react';
const LABEL_31264 = 'component_31264';
export function Component31264({ value = 31264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31264, 'data-value': derived.doubled }, children);
}
export default Component31264;
