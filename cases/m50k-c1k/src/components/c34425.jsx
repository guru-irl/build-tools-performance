import React from 'react';
const LABEL_34425 = 'component_34425';
export function Component34425({ value = 34425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34425, 'data-value': derived.doubled }, children);
}
export default Component34425;
