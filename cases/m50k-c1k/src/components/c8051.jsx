import React from 'react';
const LABEL_8051 = 'component_8051';
export function Component8051({ value = 8051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8051, 'data-value': derived.doubled }, children);
}
export default Component8051;
