import React from 'react';
const LABEL_42619 = 'component_42619';
export function Component42619({ value = 42619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42619, 'data-value': derived.doubled }, children);
}
export default Component42619;
