import React from 'react';
const LABEL_43482 = 'component_43482';
export function Component43482({ value = 43482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43482, 'data-value': derived.doubled }, children);
}
export default Component43482;
