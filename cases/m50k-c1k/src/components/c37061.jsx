import React from 'react';
const LABEL_37061 = 'component_37061';
export function Component37061({ value = 37061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37061, 'data-value': derived.doubled }, children);
}
export default Component37061;
