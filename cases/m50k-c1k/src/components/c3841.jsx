import React from 'react';
const LABEL_3841 = 'component_3841';
export function Component3841({ value = 3841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3841, 'data-value': derived.doubled }, children);
}
export default Component3841;
