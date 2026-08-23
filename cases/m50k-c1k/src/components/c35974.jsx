import React from 'react';
const LABEL_35974 = 'component_35974';
export function Component35974({ value = 35974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35974, 'data-value': derived.doubled }, children);
}
export default Component35974;
