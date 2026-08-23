import React from 'react';
const LABEL_33231 = 'component_33231';
export function Component33231({ value = 33231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33231, 'data-value': derived.doubled }, children);
}
export default Component33231;
