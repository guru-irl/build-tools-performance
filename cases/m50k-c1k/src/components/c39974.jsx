import React from 'react';
const LABEL_39974 = 'component_39974';
export function Component39974({ value = 39974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39974, 'data-value': derived.doubled }, children);
}
export default Component39974;
