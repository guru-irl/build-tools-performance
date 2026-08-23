import React from 'react';
const LABEL_37380 = 'component_37380';
export function Component37380({ value = 37380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37380, 'data-value': derived.doubled }, children);
}
export default Component37380;
