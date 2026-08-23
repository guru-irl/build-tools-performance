import React from 'react';
const LABEL_33411 = 'component_33411';
export function Component33411({ value = 33411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33411, 'data-value': derived.doubled }, children);
}
export default Component33411;
