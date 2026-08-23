import React from 'react';
const LABEL_16132 = 'component_16132';
export function Component16132({ value = 16132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16132, 'data-value': derived.doubled }, children);
}
export default Component16132;
