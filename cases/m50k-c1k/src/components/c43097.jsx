import React from 'react';
const LABEL_43097 = 'component_43097';
export function Component43097({ value = 43097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43097, 'data-value': derived.doubled }, children);
}
export default Component43097;
