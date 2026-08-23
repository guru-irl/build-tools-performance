import React from 'react';
const LABEL_37131 = 'component_37131';
export function Component37131({ value = 37131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37131, 'data-value': derived.doubled }, children);
}
export default Component37131;
