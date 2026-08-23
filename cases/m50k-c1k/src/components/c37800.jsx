import React from 'react';
const LABEL_37800 = 'component_37800';
export function Component37800({ value = 37800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37800, 'data-value': derived.doubled }, children);
}
export default Component37800;
