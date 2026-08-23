import React from 'react';
const LABEL_37553 = 'component_37553';
export function Component37553({ value = 37553, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37553, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37553, 'data-value': derived.doubled }, children);
}
export default Component37553;
