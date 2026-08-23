import React from 'react';
const LABEL_40841 = 'component_40841';
export function Component40841({ value = 40841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40841, 'data-value': derived.doubled }, children);
}
export default Component40841;
