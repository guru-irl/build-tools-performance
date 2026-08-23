import React from 'react';
const LABEL_20242 = 'component_20242';
export function Component20242({ value = 20242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20242, 'data-value': derived.doubled }, children);
}
export default Component20242;
