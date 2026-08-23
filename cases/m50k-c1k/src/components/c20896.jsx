import React from 'react';
const LABEL_20896 = 'component_20896';
export function Component20896({ value = 20896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20896, 'data-value': derived.doubled }, children);
}
export default Component20896;
