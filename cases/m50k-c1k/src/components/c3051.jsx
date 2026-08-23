import React from 'react';
const LABEL_3051 = 'component_3051';
export function Component3051({ value = 3051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3051, 'data-value': derived.doubled }, children);
}
export default Component3051;
