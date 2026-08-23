import React from 'react';
const LABEL_31254 = 'component_31254';
export function Component31254({ value = 31254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31254, 'data-value': derived.doubled }, children);
}
export default Component31254;
