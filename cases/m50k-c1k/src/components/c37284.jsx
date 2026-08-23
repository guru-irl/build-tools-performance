import React from 'react';
const LABEL_37284 = 'component_37284';
export function Component37284({ value = 37284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37284, 'data-value': derived.doubled }, children);
}
export default Component37284;
