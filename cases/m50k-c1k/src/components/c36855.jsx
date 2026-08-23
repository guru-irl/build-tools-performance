import React from 'react';
const LABEL_36855 = 'component_36855';
export function Component36855({ value = 36855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36855, 'data-value': derived.doubled }, children);
}
export default Component36855;
