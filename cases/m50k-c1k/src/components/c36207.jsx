import React from 'react';
const LABEL_36207 = 'component_36207';
export function Component36207({ value = 36207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36207, 'data-value': derived.doubled }, children);
}
export default Component36207;
