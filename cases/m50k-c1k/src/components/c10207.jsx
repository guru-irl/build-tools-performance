import React from 'react';
const LABEL_10207 = 'component_10207';
export function Component10207({ value = 10207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10207, 'data-value': derived.doubled }, children);
}
export default Component10207;
