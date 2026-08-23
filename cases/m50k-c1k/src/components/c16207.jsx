import React from 'react';
const LABEL_16207 = 'component_16207';
export function Component16207({ value = 16207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16207, 'data-value': derived.doubled }, children);
}
export default Component16207;
