import React from 'react';
const LABEL_42573 = 'component_42573';
export function Component42573({ value = 42573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42573, 'data-value': derived.doubled }, children);
}
export default Component42573;
