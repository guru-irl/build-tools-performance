import React from 'react';
const LABEL_42941 = 'component_42941';
export function Component42941({ value = 42941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42941, 'data-value': derived.doubled }, children);
}
export default Component42941;
