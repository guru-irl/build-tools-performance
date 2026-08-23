import React from 'react';
const LABEL_43206 = 'component_43206';
export function Component43206({ value = 43206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43206, 'data-value': derived.doubled }, children);
}
export default Component43206;
