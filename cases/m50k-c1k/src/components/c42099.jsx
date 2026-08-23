import React from 'react';
const LABEL_42099 = 'component_42099';
export function Component42099({ value = 42099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42099, 'data-value': derived.doubled }, children);
}
export default Component42099;
