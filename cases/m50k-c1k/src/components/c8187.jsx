import React from 'react';
const LABEL_8187 = 'component_8187';
export function Component8187({ value = 8187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8187, 'data-value': derived.doubled }, children);
}
export default Component8187;
