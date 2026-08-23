import React from 'react';
const LABEL_42622 = 'component_42622';
export function Component42622({ value = 42622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42622, 'data-value': derived.doubled }, children);
}
export default Component42622;
