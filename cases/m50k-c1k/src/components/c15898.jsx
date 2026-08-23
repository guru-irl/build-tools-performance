import React from 'react';
const LABEL_15898 = 'component_15898';
export function Component15898({ value = 15898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15898, 'data-value': derived.doubled }, children);
}
export default Component15898;
