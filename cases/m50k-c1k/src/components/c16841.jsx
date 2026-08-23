import React from 'react';
const LABEL_16841 = 'component_16841';
export function Component16841({ value = 16841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16841, 'data-value': derived.doubled }, children);
}
export default Component16841;
