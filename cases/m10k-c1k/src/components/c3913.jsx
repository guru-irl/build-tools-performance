import React from 'react';
const LABEL_3913 = 'component_3913';
export function Component3913({ value = 3913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3913, 'data-value': derived.doubled }, children);
}
export default Component3913;
