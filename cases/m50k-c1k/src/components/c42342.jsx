import React from 'react';
const LABEL_42342 = 'component_42342';
export function Component42342({ value = 42342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42342, 'data-value': derived.doubled }, children);
}
export default Component42342;
