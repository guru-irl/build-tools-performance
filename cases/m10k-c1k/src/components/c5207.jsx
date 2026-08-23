import React from 'react';
const LABEL_5207 = 'component_5207';
export function Component5207({ value = 5207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5207, 'data-value': derived.doubled }, children);
}
export default Component5207;
