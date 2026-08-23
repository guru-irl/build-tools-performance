import React from 'react';
const LABEL_42301 = 'component_42301';
export function Component42301({ value = 42301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42301, 'data-value': derived.doubled }, children);
}
export default Component42301;
