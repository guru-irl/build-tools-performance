import React from 'react';
const LABEL_37423 = 'component_37423';
export function Component37423({ value = 37423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37423, 'data-value': derived.doubled }, children);
}
export default Component37423;
