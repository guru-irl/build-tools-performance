import React from 'react';
const LABEL_37093 = 'component_37093';
export function Component37093({ value = 37093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37093, 'data-value': derived.doubled }, children);
}
export default Component37093;
