import React from 'react';
const LABEL_12033 = 'component_12033';
export function Component12033({ value = 12033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12033, 'data-value': derived.doubled }, children);
}
export default Component12033;
