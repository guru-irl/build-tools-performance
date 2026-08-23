import React from 'react';
const LABEL_32593 = 'component_32593';
export function Component32593({ value = 32593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32593, 'data-value': derived.doubled }, children);
}
export default Component32593;
