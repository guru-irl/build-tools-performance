import React from 'react';
const LABEL_42508 = 'component_42508';
export function Component42508({ value = 42508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42508, 'data-value': derived.doubled }, children);
}
export default Component42508;
