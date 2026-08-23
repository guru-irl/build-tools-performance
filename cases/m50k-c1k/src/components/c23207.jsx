import React from 'react';
const LABEL_23207 = 'component_23207';
export function Component23207({ value = 23207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23207, 'data-value': derived.doubled }, children);
}
export default Component23207;
