import React from 'react';
const LABEL_43827 = 'component_43827';
export function Component43827({ value = 43827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43827, 'data-value': derived.doubled }, children);
}
export default Component43827;
