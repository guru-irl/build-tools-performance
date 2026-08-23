import React from 'react';
const LABEL_24738 = 'component_24738';
export function Component24738({ value = 24738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24738, 'data-value': derived.doubled }, children);
}
export default Component24738;
