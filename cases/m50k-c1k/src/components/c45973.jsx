import React from 'react';
const LABEL_45973 = 'component_45973';
export function Component45973({ value = 45973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45973, 'data-value': derived.doubled }, children);
}
export default Component45973;
