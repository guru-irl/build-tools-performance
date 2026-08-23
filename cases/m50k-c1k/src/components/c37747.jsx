import React from 'react';
const LABEL_37747 = 'component_37747';
export function Component37747({ value = 37747, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37747, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37747, 'data-value': derived.doubled }, children);
}
export default Component37747;
