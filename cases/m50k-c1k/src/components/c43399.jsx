import React from 'react';
const LABEL_43399 = 'component_43399';
export function Component43399({ value = 43399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43399, 'data-value': derived.doubled }, children);
}
export default Component43399;
