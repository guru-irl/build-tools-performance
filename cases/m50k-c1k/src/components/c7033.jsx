import React from 'react';
const LABEL_7033 = 'component_7033';
export function Component7033({ value = 7033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7033, 'data-value': derived.doubled }, children);
}
export default Component7033;
