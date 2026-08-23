import React from 'react';
const LABEL_42258 = 'component_42258';
export function Component42258({ value = 42258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42258, 'data-value': derived.doubled }, children);
}
export default Component42258;
