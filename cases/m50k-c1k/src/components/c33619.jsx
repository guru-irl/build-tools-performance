import React from 'react';
const LABEL_33619 = 'component_33619';
export function Component33619({ value = 33619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33619, 'data-value': derived.doubled }, children);
}
export default Component33619;
