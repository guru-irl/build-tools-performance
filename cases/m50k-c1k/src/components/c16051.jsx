import React from 'react';
const LABEL_16051 = 'component_16051';
export function Component16051({ value = 16051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16051, 'data-value': derived.doubled }, children);
}
export default Component16051;
