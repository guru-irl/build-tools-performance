import React from 'react';
const LABEL_18308 = 'component_18308';
export function Component18308({ value = 18308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18308, 'data-value': derived.doubled }, children);
}
export default Component18308;
