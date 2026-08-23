import React from 'react';
const LABEL_26532 = 'component_26532';
export function Component26532({ value = 26532, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26532, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26532, 'data-value': derived.doubled }, children);
}
export default Component26532;
