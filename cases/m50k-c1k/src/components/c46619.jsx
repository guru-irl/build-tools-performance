import React from 'react';
const LABEL_46619 = 'component_46619';
export function Component46619({ value = 46619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46619, 'data-value': derived.doubled }, children);
}
export default Component46619;
