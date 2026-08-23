import React from 'react';
const LABEL_41619 = 'component_41619';
export function Component41619({ value = 41619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41619, 'data-value': derived.doubled }, children);
}
export default Component41619;
