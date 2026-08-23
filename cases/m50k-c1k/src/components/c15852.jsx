import React from 'react';
const LABEL_15852 = 'component_15852';
export function Component15852({ value = 15852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15852, 'data-value': derived.doubled }, children);
}
export default Component15852;
