import React from 'react';
const LABEL_14852 = 'component_14852';
export function Component14852({ value = 14852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14852, 'data-value': derived.doubled }, children);
}
export default Component14852;
