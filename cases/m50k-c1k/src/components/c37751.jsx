import React from 'react';
const LABEL_37751 = 'component_37751';
export function Component37751({ value = 37751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37751, 'data-value': derived.doubled }, children);
}
export default Component37751;
