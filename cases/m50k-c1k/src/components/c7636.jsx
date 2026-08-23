import React from 'react';
const LABEL_7636 = 'component_7636';
export function Component7636({ value = 7636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7636, 'data-value': derived.doubled }, children);
}
export default Component7636;
