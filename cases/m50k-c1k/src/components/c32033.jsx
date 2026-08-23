import React from 'react';
const LABEL_32033 = 'component_32033';
export function Component32033({ value = 32033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32033, 'data-value': derived.doubled }, children);
}
export default Component32033;
