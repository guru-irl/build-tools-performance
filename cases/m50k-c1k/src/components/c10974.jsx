import React from 'react';
const LABEL_10974 = 'component_10974';
export function Component10974({ value = 10974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10974, 'data-value': derived.doubled }, children);
}
export default Component10974;
