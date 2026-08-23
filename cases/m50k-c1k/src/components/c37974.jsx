import React from 'react';
const LABEL_37974 = 'component_37974';
export function Component37974({ value = 37974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37974, 'data-value': derived.doubled }, children);
}
export default Component37974;
