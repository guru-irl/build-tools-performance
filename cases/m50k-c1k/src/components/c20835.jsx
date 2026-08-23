import React from 'react';
const LABEL_20835 = 'component_20835';
export function Component20835({ value = 20835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20835, 'data-value': derived.doubled }, children);
}
export default Component20835;
