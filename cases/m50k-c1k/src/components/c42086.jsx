import React from 'react';
const LABEL_42086 = 'component_42086';
export function Component42086({ value = 42086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42086, 'data-value': derived.doubled }, children);
}
export default Component42086;
