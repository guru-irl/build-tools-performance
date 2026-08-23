import React from 'react';
const LABEL_28471 = 'component_28471';
export function Component28471({ value = 28471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28471, 'data-value': derived.doubled }, children);
}
export default Component28471;
