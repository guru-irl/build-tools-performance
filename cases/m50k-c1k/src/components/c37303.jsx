import React from 'react';
const LABEL_37303 = 'component_37303';
export function Component37303({ value = 37303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37303, 'data-value': derived.doubled }, children);
}
export default Component37303;
