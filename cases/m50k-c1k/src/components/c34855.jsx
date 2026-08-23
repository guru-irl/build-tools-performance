import React from 'react';
const LABEL_34855 = 'component_34855';
export function Component34855({ value = 34855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34855, 'data-value': derived.doubled }, children);
}
export default Component34855;
