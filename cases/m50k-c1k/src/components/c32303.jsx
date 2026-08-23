import React from 'react';
const LABEL_32303 = 'component_32303';
export function Component32303({ value = 32303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32303, 'data-value': derived.doubled }, children);
}
export default Component32303;
