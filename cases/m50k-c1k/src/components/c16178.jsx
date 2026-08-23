import React from 'react';
const LABEL_16178 = 'component_16178';
export function Component16178({ value = 16178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16178, 'data-value': derived.doubled }, children);
}
export default Component16178;
