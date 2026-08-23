import React from 'react';
const LABEL_41852 = 'component_41852';
export function Component41852({ value = 41852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41852, 'data-value': derived.doubled }, children);
}
export default Component41852;
