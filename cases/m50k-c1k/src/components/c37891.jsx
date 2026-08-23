import React from 'react';
const LABEL_37891 = 'component_37891';
export function Component37891({ value = 37891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37891, 'data-value': derived.doubled }, children);
}
export default Component37891;
