import React from 'react';
const LABEL_13852 = 'component_13852';
export function Component13852({ value = 13852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13852, 'data-value': derived.doubled }, children);
}
export default Component13852;
