import React from 'react';
const LABEL_12745 = 'component_12745';
export function Component12745({ value = 12745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12745, 'data-value': derived.doubled }, children);
}
export default Component12745;
