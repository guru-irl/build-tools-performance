import React from 'react';
const LABEL_42395 = 'component_42395';
export function Component42395({ value = 42395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42395, 'data-value': derived.doubled }, children);
}
export default Component42395;
