import React from 'react';
const LABEL_42710 = 'component_42710';
export function Component42710({ value = 42710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42710, 'data-value': derived.doubled }, children);
}
export default Component42710;
