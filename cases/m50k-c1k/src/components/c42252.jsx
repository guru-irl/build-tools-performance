import React from 'react';
const LABEL_42252 = 'component_42252';
export function Component42252({ value = 42252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42252, 'data-value': derived.doubled }, children);
}
export default Component42252;
