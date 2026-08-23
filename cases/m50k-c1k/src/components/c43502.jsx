import React from 'react';
const LABEL_43502 = 'component_43502';
export function Component43502({ value = 43502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43502, 'data-value': derived.doubled }, children);
}
export default Component43502;
