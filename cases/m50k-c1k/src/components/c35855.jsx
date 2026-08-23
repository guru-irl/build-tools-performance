import React from 'react';
const LABEL_35855 = 'component_35855';
export function Component35855({ value = 35855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35855, 'data-value': derived.doubled }, children);
}
export default Component35855;
