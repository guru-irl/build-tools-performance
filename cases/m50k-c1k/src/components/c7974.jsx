import React from 'react';
const LABEL_7974 = 'component_7974';
export function Component7974({ value = 7974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7974, 'data-value': derived.doubled }, children);
}
export default Component7974;
