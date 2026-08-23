import React from 'react';
const LABEL_42441 = 'component_42441';
export function Component42441({ value = 42441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42441, 'data-value': derived.doubled }, children);
}
export default Component42441;
