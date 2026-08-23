import React from 'react';
const LABEL_44937 = 'component_44937';
export function Component44937({ value = 44937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44937, 'data-value': derived.doubled }, children);
}
export default Component44937;
