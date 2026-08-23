import React from 'react';
const LABEL_31623 = 'component_31623';
export function Component31623({ value = 31623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31623, 'data-value': derived.doubled }, children);
}
export default Component31623;
