import React from 'react';
const LABEL_10132 = 'component_10132';
export function Component10132({ value = 10132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10132, 'data-value': derived.doubled }, children);
}
export default Component10132;
