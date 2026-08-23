import React from 'react';
const LABEL_8852 = 'component_8852';
export function Component8852({ value = 8852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8852, 'data-value': derived.doubled }, children);
}
export default Component8852;
