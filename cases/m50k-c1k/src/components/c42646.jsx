import React from 'react';
const LABEL_42646 = 'component_42646';
export function Component42646({ value = 42646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42646, 'data-value': derived.doubled }, children);
}
export default Component42646;
