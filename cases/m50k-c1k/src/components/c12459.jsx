import React from 'react';
const LABEL_12459 = 'component_12459';
export function Component12459({ value = 12459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12459, 'data-value': derived.doubled }, children);
}
export default Component12459;
