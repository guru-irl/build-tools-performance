import React from 'react';
const LABEL_6033 = 'component_6033';
export function Component6033({ value = 6033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6033, 'data-value': derived.doubled }, children);
}
export default Component6033;
