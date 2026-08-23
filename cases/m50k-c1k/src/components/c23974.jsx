import React from 'react';
const LABEL_23974 = 'component_23974';
export function Component23974({ value = 23974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23974, 'data-value': derived.doubled }, children);
}
export default Component23974;
