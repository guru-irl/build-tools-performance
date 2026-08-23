import React from 'react';
const LABEL_42033 = 'component_42033';
export function Component42033({ value = 42033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42033, 'data-value': derived.doubled }, children);
}
export default Component42033;
