import React from 'react';
const LABEL_5030 = 'component_5030';
export function Component5030({ value = 5030, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5030, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5030, 'data-value': derived.doubled }, children);
}
export default Component5030;
