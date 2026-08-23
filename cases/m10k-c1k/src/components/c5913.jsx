import React from 'react';
const LABEL_5913 = 'component_5913';
export function Component5913({ value = 5913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5913, 'data-value': derived.doubled }, children);
}
export default Component5913;
