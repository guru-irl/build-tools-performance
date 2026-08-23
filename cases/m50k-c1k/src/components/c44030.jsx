import React from 'react';
const LABEL_44030 = 'component_44030';
export function Component44030({ value = 44030, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44030, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44030, 'data-value': derived.doubled }, children);
}
export default Component44030;
