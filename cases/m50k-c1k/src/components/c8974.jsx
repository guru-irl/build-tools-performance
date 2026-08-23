import React from 'react';
const LABEL_8974 = 'component_8974';
export function Component8974({ value = 8974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8974, 'data-value': derived.doubled }, children);
}
export default Component8974;
