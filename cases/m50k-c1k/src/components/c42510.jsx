import React from 'react';
const LABEL_42510 = 'component_42510';
export function Component42510({ value = 42510, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42510, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42510, 'data-value': derived.doubled }, children);
}
export default Component42510;
