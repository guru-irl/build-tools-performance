import React from 'react';
const LABEL_37287 = 'component_37287';
export function Component37287({ value = 37287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37287, 'data-value': derived.doubled }, children);
}
export default Component37287;
