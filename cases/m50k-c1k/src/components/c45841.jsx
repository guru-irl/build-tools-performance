import React from 'react';
const LABEL_45841 = 'component_45841';
export function Component45841({ value = 45841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45841, 'data-value': derived.doubled }, children);
}
export default Component45841;
