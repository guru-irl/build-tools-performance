import React from 'react';
const LABEL_44891 = 'component_44891';
export function Component44891({ value = 44891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44891, 'data-value': derived.doubled }, children);
}
export default Component44891;
