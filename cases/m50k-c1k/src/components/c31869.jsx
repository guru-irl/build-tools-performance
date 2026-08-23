import React from 'react';
const LABEL_31869 = 'component_31869';
export function Component31869({ value = 31869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31869, 'data-value': derived.doubled }, children);
}
export default Component31869;
