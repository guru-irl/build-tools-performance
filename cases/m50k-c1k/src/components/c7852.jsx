import React from 'react';
const LABEL_7852 = 'component_7852';
export function Component7852({ value = 7852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7852, 'data-value': derived.doubled }, children);
}
export default Component7852;
