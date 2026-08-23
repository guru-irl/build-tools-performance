import React from 'react';
const LABEL_13051 = 'component_13051';
export function Component13051({ value = 13051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13051, 'data-value': derived.doubled }, children);
}
export default Component13051;
