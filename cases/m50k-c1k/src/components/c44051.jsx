import React from 'react';
const LABEL_44051 = 'component_44051';
export function Component44051({ value = 44051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44051, 'data-value': derived.doubled }, children);
}
export default Component44051;
