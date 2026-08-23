import React from 'react';
const LABEL_14619 = 'component_14619';
export function Component14619({ value = 14619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14619, 'data-value': derived.doubled }, children);
}
export default Component14619;
