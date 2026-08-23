import React from 'react';
const LABEL_31058 = 'component_31058';
export function Component31058({ value = 31058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31058, 'data-value': derived.doubled }, children);
}
export default Component31058;
