import React from 'react';
const LABEL_18139 = 'component_18139';
export function Component18139({ value = 18139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18139, 'data-value': derived.doubled }, children);
}
export default Component18139;
