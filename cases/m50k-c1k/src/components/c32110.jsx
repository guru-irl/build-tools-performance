import React from 'react';
const LABEL_32110 = 'component_32110';
export function Component32110({ value = 32110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32110, 'data-value': derived.doubled }, children);
}
export default Component32110;
