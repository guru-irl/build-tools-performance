import React from 'react';
const LABEL_32051 = 'component_32051';
export function Component32051({ value = 32051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32051, 'data-value': derived.doubled }, children);
}
export default Component32051;
