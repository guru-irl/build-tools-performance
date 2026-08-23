import React from 'react';
const LABEL_32214 = 'component_32214';
export function Component32214({ value = 32214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32214, 'data-value': derived.doubled }, children);
}
export default Component32214;
