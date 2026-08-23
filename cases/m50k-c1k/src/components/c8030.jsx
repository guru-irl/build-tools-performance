import React from 'react';
const LABEL_8030 = 'component_8030';
export function Component8030({ value = 8030, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8030, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8030, 'data-value': derived.doubled }, children);
}
export default Component8030;
