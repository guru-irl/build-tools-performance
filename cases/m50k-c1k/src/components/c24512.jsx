import React from 'react';
const LABEL_24512 = 'component_24512';
export function Component24512({ value = 24512, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24512, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24512, 'data-value': derived.doubled }, children);
}
export default Component24512;
