import React from 'react';
const LABEL_37971 = 'component_37971';
export function Component37971({ value = 37971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37971, 'data-value': derived.doubled }, children);
}
export default Component37971;
