import React from 'react';
const LABEL_11060 = 'component_11060';
export function Component11060({ value = 11060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11060, 'data-value': derived.doubled }, children);
}
export default Component11060;
