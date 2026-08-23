import React from 'react';
const LABEL_24676 = 'component_24676';
export function Component24676({ value = 24676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24676, 'data-value': derived.doubled }, children);
}
export default Component24676;
