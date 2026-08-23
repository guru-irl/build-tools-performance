import React from 'react';
const LABEL_37958 = 'component_37958';
export function Component37958({ value = 37958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37958, 'data-value': derived.doubled }, children);
}
export default Component37958;
