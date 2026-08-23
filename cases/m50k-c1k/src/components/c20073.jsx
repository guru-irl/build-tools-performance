import React from 'react';
const LABEL_20073 = 'component_20073';
export function Component20073({ value = 20073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20073, 'data-value': derived.doubled }, children);
}
export default Component20073;
