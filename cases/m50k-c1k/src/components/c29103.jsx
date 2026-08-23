import React from 'react';
const LABEL_29103 = 'component_29103';
export function Component29103({ value = 29103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29103, 'data-value': derived.doubled }, children);
}
export default Component29103;
