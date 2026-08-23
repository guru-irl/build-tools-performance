import React from 'react';
const LABEL_42380 = 'component_42380';
export function Component42380({ value = 42380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42380, 'data-value': derived.doubled }, children);
}
export default Component42380;
