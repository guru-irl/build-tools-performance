import React from 'react';
const LABEL_31116 = 'component_31116';
export function Component31116({ value = 31116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31116, 'data-value': derived.doubled }, children);
}
export default Component31116;
