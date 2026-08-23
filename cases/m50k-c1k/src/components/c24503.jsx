import React from 'react';
const LABEL_24503 = 'component_24503';
export function Component24503({ value = 24503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24503, 'data-value': derived.doubled }, children);
}
export default Component24503;
