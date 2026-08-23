import React from 'react';
const LABEL_39260 = 'component_39260';
export function Component39260({ value = 39260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39260, 'data-value': derived.doubled }, children);
}
export default Component39260;
