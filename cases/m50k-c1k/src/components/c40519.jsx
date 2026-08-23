import React from 'react';
const LABEL_40519 = 'component_40519';
export function Component40519({ value = 40519, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40519, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40519, 'data-value': derived.doubled }, children);
}
export default Component40519;
