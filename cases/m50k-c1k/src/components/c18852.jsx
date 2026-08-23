import React from 'react';
const LABEL_18852 = 'component_18852';
export function Component18852({ value = 18852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18852, 'data-value': derived.doubled }, children);
}
export default Component18852;
