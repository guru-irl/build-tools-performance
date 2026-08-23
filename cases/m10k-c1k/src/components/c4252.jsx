import React from 'react';
const LABEL_4252 = 'component_4252';
export function Component4252({ value = 4252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4252, 'data-value': derived.doubled }, children);
}
export default Component4252;
