import React from 'react';
const LABEL_33051 = 'component_33051';
export function Component33051({ value = 33051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33051, 'data-value': derived.doubled }, children);
}
export default Component33051;
