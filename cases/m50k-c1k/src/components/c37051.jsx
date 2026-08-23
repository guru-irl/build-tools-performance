import React from 'react';
const LABEL_37051 = 'component_37051';
export function Component37051({ value = 37051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37051, 'data-value': derived.doubled }, children);
}
export default Component37051;
