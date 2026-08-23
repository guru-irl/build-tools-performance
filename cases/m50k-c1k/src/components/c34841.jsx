import React from 'react';
const LABEL_34841 = 'component_34841';
export function Component34841({ value = 34841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34841, 'data-value': derived.doubled }, children);
}
export default Component34841;
