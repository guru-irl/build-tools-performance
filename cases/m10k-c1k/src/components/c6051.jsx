import React from 'react';
const LABEL_6051 = 'component_6051';
export function Component6051({ value = 6051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6051, 'data-value': derived.doubled }, children);
}
export default Component6051;
