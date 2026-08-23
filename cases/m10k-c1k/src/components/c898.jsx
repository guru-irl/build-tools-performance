import React from 'react';
const LABEL_898 = 'component_898';
export function Component898({ value = 898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_898, 'data-value': derived.doubled }, children);
}
export default Component898;
