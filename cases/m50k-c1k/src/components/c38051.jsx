import React from 'react';
const LABEL_38051 = 'component_38051';
export function Component38051({ value = 38051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38051, 'data-value': derived.doubled }, children);
}
export default Component38051;
