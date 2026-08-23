import React from 'react';
const LABEL_32006 = 'component_32006';
export function Component32006({ value = 32006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32006, 'data-value': derived.doubled }, children);
}
export default Component32006;
