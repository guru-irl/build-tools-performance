import React from 'react';
const LABEL_8619 = 'component_8619';
export function Component8619({ value = 8619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8619, 'data-value': derived.doubled }, children);
}
export default Component8619;
