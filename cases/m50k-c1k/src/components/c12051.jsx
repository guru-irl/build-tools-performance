import React from 'react';
const LABEL_12051 = 'component_12051';
export function Component12051({ value = 12051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12051, 'data-value': derived.doubled }, children);
}
export default Component12051;
