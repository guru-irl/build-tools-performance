import React from 'react';
const LABEL_12613 = 'component_12613';
export function Component12613({ value = 12613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12613, 'data-value': derived.doubled }, children);
}
export default Component12613;
