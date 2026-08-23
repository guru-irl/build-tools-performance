import React from 'react';
const LABEL_20030 = 'component_20030';
export function Component20030({ value = 20030, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20030, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20030, 'data-value': derived.doubled }, children);
}
export default Component20030;
