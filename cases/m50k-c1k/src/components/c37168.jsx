import React from 'react';
const LABEL_37168 = 'component_37168';
export function Component37168({ value = 37168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37168, 'data-value': derived.doubled }, children);
}
export default Component37168;
