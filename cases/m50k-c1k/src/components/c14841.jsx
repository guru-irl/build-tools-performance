import React from 'react';
const LABEL_14841 = 'component_14841';
export function Component14841({ value = 14841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14841, 'data-value': derived.doubled }, children);
}
export default Component14841;
