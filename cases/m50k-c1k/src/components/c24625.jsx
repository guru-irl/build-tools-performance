import React from 'react';
const LABEL_24625 = 'component_24625';
export function Component24625({ value = 24625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24625, 'data-value': derived.doubled }, children);
}
export default Component24625;
