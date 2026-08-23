import React from 'react';
const LABEL_31178 = 'component_31178';
export function Component31178({ value = 31178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31178, 'data-value': derived.doubled }, children);
}
export default Component31178;
