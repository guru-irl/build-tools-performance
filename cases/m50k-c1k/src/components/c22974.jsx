import React from 'react';
const LABEL_22974 = 'component_22974';
export function Component22974({ value = 22974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22974, 'data-value': derived.doubled }, children);
}
export default Component22974;
