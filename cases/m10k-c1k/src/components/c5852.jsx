import React from 'react';
const LABEL_5852 = 'component_5852';
export function Component5852({ value = 5852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5852, 'data-value': derived.doubled }, children);
}
export default Component5852;
