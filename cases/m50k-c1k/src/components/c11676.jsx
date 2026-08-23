import React from 'react';
const LABEL_11676 = 'component_11676';
export function Component11676({ value = 11676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11676, 'data-value': derived.doubled }, children);
}
export default Component11676;
