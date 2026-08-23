import React from 'react';
const LABEL_43613 = 'component_43613';
export function Component43613({ value = 43613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43613, 'data-value': derived.doubled }, children);
}
export default Component43613;
