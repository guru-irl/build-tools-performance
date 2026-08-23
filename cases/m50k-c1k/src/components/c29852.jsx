import React from 'react';
const LABEL_29852 = 'component_29852';
export function Component29852({ value = 29852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29852, 'data-value': derived.doubled }, children);
}
export default Component29852;
