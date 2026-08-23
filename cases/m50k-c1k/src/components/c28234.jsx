import React from 'react';
const LABEL_28234 = 'component_28234';
export function Component28234({ value = 28234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28234, 'data-value': derived.doubled }, children);
}
export default Component28234;
