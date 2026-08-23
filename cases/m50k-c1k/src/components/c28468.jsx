import React from 'react';
const LABEL_28468 = 'component_28468';
export function Component28468({ value = 28468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28468, 'data-value': derived.doubled }, children);
}
export default Component28468;
