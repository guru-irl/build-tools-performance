import React from 'react';
const LABEL_36974 = 'component_36974';
export function Component36974({ value = 36974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36974, 'data-value': derived.doubled }, children);
}
export default Component36974;
