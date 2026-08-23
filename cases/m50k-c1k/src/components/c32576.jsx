import React from 'react';
const LABEL_32576 = 'component_32576';
export function Component32576({ value = 32576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32576, 'data-value': derived.doubled }, children);
}
export default Component32576;
