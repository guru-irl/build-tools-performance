import React from 'react';
const LABEL_36352 = 'component_36352';
export function Component36352({ value = 36352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36352, 'data-value': derived.doubled }, children);
}
export default Component36352;
