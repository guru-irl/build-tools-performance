import React from 'react';
const LABEL_13841 = 'component_13841';
export function Component13841({ value = 13841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13841, 'data-value': derived.doubled }, children);
}
export default Component13841;
