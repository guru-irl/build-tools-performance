import React from 'react';
const LABEL_42616 = 'component_42616';
export function Component42616({ value = 42616, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42616, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42616, 'data-value': derived.doubled }, children);
}
export default Component42616;
