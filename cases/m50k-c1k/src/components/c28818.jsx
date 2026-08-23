import React from 'react';
const LABEL_28818 = 'component_28818';
export function Component28818({ value = 28818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28818, 'data-value': derived.doubled }, children);
}
export default Component28818;
