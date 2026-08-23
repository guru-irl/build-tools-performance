import React from 'react';
const LABEL_42568 = 'component_42568';
export function Component42568({ value = 42568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42568, 'data-value': derived.doubled }, children);
}
export default Component42568;
