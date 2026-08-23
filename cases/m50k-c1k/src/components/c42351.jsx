import React from 'react';
const LABEL_42351 = 'component_42351';
export function Component42351({ value = 42351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42351, 'data-value': derived.doubled }, children);
}
export default Component42351;
