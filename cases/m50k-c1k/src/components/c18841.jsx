import React from 'react';
const LABEL_18841 = 'component_18841';
export function Component18841({ value = 18841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18841, 'data-value': derived.doubled }, children);
}
export default Component18841;
