import React from 'react';
const LABEL_22937 = 'component_22937';
export function Component22937({ value = 22937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22937, 'data-value': derived.doubled }, children);
}
export default Component22937;
