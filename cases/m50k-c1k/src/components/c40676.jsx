import React from 'react';
const LABEL_40676 = 'component_40676';
export function Component40676({ value = 40676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40676, 'data-value': derived.doubled }, children);
}
export default Component40676;
