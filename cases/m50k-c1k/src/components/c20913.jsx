import React from 'react';
const LABEL_20913 = 'component_20913';
export function Component20913({ value = 20913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20913, 'data-value': derived.doubled }, children);
}
export default Component20913;
