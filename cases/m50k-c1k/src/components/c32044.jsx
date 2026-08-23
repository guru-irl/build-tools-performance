import React from 'react';
const LABEL_32044 = 'component_32044';
export function Component32044({ value = 32044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32044, 'data-value': derived.doubled }, children);
}
export default Component32044;
