import React from 'react';
const LABEL_37778 = 'component_37778';
export function Component37778({ value = 37778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37778, 'data-value': derived.doubled }, children);
}
export default Component37778;
