import React from 'react';
const LABEL_20661 = 'component_20661';
export function Component20661({ value = 20661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20661, 'data-value': derived.doubled }, children);
}
export default Component20661;
