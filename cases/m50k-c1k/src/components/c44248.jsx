import React from 'react';
const LABEL_44248 = 'component_44248';
export function Component44248({ value = 44248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44248, 'data-value': derived.doubled }, children);
}
export default Component44248;
