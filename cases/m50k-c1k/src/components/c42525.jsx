import React from 'react';
const LABEL_42525 = 'component_42525';
export function Component42525({ value = 42525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42525, 'data-value': derived.doubled }, children);
}
export default Component42525;
