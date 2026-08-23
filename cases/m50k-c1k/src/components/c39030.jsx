import React from 'react';
const LABEL_39030 = 'component_39030';
export function Component39030({ value = 39030, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39030, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39030, 'data-value': derived.doubled }, children);
}
export default Component39030;
