import React from 'react';
const LABEL_307 = 'component_307';
export function Component307({ value = 307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_307, 'data-value': derived.doubled }, children);
}
export default Component307;
