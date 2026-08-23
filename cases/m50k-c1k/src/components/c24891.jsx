import React from 'react';
const LABEL_24891 = 'component_24891';
export function Component24891({ value = 24891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24891, 'data-value': derived.doubled }, children);
}
export default Component24891;
