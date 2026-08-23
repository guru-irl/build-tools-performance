import React from 'react';
const LABEL_30898 = 'component_30898';
export function Component30898({ value = 30898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30898, 'data-value': derived.doubled }, children);
}
export default Component30898;
