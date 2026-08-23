import React from 'react';
const LABEL_37977 = 'component_37977';
export function Component37977({ value = 37977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37977, 'data-value': derived.doubled }, children);
}
export default Component37977;
