import React from 'react';
const LABEL_42047 = 'component_42047';
export function Component42047({ value = 42047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42047, 'data-value': derived.doubled }, children);
}
export default Component42047;
