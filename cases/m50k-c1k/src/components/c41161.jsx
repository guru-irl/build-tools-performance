import React from 'react';
const LABEL_41161 = 'component_41161';
export function Component41161({ value = 41161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41161, 'data-value': derived.doubled }, children);
}
export default Component41161;
