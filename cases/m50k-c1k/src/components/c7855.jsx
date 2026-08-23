import React from 'react';
const LABEL_7855 = 'component_7855';
export function Component7855({ value = 7855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7855, 'data-value': derived.doubled }, children);
}
export default Component7855;
