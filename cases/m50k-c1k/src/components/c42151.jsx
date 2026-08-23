import React from 'react';
const LABEL_42151 = 'component_42151';
export function Component42151({ value = 42151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42151, 'data-value': derived.doubled }, children);
}
export default Component42151;
