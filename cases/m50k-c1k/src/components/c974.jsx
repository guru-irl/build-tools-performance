import React from 'react';
const LABEL_974 = 'component_974';
export function Component974({ value = 974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_974, 'data-value': derived.doubled }, children);
}
export default Component974;
