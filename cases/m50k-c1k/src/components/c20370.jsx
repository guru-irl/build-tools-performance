import React from 'react';
const LABEL_20370 = 'component_20370';
export function Component20370({ value = 20370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20370, 'data-value': derived.doubled }, children);
}
export default Component20370;
