import React from 'react';
const LABEL_19619 = 'component_19619';
export function Component19619({ value = 19619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19619, 'data-value': derived.doubled }, children);
}
export default Component19619;
