import React from 'react';
const LABEL_24126 = 'component_24126';
export function Component24126({ value = 24126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24126, 'data-value': derived.doubled }, children);
}
export default Component24126;
