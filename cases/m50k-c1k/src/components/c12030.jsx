import React from 'react';
const LABEL_12030 = 'component_12030';
export function Component12030({ value = 12030, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12030, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12030, 'data-value': derived.doubled }, children);
}
export default Component12030;
