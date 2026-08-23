import React from 'react';
const LABEL_32176 = 'component_32176';
export function Component32176({ value = 32176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32176, 'data-value': derived.doubled }, children);
}
export default Component32176;
