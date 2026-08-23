import React from 'react';
const LABEL_46344 = 'component_46344';
export function Component46344({ value = 46344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46344, 'data-value': derived.doubled }, children);
}
export default Component46344;
