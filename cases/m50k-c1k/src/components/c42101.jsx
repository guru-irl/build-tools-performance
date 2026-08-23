import React from 'react';
const LABEL_42101 = 'component_42101';
export function Component42101({ value = 42101, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42101, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42101, 'data-value': derived.doubled }, children);
}
export default Component42101;
