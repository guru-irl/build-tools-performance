import React from 'react';
const LABEL_7841 = 'component_7841';
export function Component7841({ value = 7841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7841, 'data-value': derived.doubled }, children);
}
export default Component7841;
