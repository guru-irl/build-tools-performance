import React from 'react';
const LABEL_21898 = 'component_21898';
export function Component21898({ value = 21898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21898, 'data-value': derived.doubled }, children);
}
export default Component21898;
