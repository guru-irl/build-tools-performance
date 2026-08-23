import React from 'react';
const LABEL_19841 = 'component_19841';
export function Component19841({ value = 19841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19841, 'data-value': derived.doubled }, children);
}
export default Component19841;
