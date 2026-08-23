import React from 'react';
const LABEL_42902 = 'component_42902';
export function Component42902({ value = 42902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42902, 'data-value': derived.doubled }, children);
}
export default Component42902;
