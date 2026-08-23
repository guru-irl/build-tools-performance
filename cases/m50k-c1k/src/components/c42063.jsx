import React from 'react';
const LABEL_42063 = 'component_42063';
export function Component42063({ value = 42063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42063, 'data-value': derived.doubled }, children);
}
export default Component42063;
