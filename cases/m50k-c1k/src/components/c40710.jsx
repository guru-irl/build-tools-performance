import React from 'react';
const LABEL_40710 = 'component_40710';
export function Component40710({ value = 40710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40710, 'data-value': derived.doubled }, children);
}
export default Component40710;
