import React from 'react';
const LABEL_31676 = 'component_31676';
export function Component31676({ value = 31676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31676, 'data-value': derived.doubled }, children);
}
export default Component31676;
