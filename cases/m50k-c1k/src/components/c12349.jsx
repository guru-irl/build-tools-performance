import React from 'react';
const LABEL_12349 = 'component_12349';
export function Component12349({ value = 12349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12349, 'data-value': derived.doubled }, children);
}
export default Component12349;
