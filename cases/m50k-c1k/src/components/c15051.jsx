import React from 'react';
const LABEL_15051 = 'component_15051';
export function Component15051({ value = 15051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15051, 'data-value': derived.doubled }, children);
}
export default Component15051;
