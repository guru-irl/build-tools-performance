import React from 'react';
const LABEL_8710 = 'component_8710';
export function Component8710({ value = 8710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8710, 'data-value': derived.doubled }, children);
}
export default Component8710;
