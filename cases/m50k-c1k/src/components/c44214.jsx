import React from 'react';
const LABEL_44214 = 'component_44214';
export function Component44214({ value = 44214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44214, 'data-value': derived.doubled }, children);
}
export default Component44214;
