import React from 'react';
const LABEL_15057 = 'component_15057';
export function Component15057({ value = 15057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15057, 'data-value': derived.doubled }, children);
}
export default Component15057;
