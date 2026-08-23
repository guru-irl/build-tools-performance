import React from 'react';
const LABEL_39882 = 'component_39882';
export function Component39882({ value = 39882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39882, 'data-value': derived.doubled }, children);
}
export default Component39882;
