import React from 'react';
const LABEL_42491 = 'component_42491';
export function Component42491({ value = 42491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42491, 'data-value': derived.doubled }, children);
}
export default Component42491;
