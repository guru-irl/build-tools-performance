import React from 'react';
const LABEL_3937 = 'component_3937';
export function Component3937({ value = 3937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3937, 'data-value': derived.doubled }, children);
}
export default Component3937;
