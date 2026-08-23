import React from 'react';
const LABEL_25033 = 'component_25033';
export function Component25033({ value = 25033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25033, 'data-value': derived.doubled }, children);
}
export default Component25033;
