import React from 'react';
const LABEL_8554 = 'component_8554';
export function Component8554({ value = 8554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8554, 'data-value': derived.doubled }, children);
}
export default Component8554;
