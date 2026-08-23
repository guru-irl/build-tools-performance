import React from 'react';
const LABEL_37948 = 'component_37948';
export function Component37948({ value = 37948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37948, 'data-value': derived.doubled }, children);
}
export default Component37948;
