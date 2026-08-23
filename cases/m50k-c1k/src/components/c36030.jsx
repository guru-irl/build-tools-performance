import React from 'react';
const LABEL_36030 = 'component_36030';
export function Component36030({ value = 36030, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36030, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36030, 'data-value': derived.doubled }, children);
}
export default Component36030;
