import React from 'react';
const LABEL_35380 = 'component_35380';
export function Component35380({ value = 35380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35380, 'data-value': derived.doubled }, children);
}
export default Component35380;
