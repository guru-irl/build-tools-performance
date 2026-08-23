import React from 'react';
const LABEL_4841 = 'component_4841';
export function Component4841({ value = 4841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4841, 'data-value': derived.doubled }, children);
}
export default Component4841;
