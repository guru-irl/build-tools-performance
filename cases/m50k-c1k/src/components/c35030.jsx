import React from 'react';
const LABEL_35030 = 'component_35030';
export function Component35030({ value = 35030, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35030, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35030, 'data-value': derived.doubled }, children);
}
export default Component35030;
