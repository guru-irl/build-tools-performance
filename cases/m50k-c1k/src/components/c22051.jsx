import React from 'react';
const LABEL_22051 = 'component_22051';
export function Component22051({ value = 22051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22051, 'data-value': derived.doubled }, children);
}
export default Component22051;
