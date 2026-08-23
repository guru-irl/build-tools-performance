import React from 'react';
const LABEL_37813 = 'component_37813';
export function Component37813({ value = 37813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37813, 'data-value': derived.doubled }, children);
}
export default Component37813;
