import React from 'react';
const LABEL_37129 = 'component_37129';
export function Component37129({ value = 37129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37129, 'data-value': derived.doubled }, children);
}
export default Component37129;
