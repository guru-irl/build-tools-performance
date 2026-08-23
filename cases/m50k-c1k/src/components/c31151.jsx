import React from 'react';
const LABEL_31151 = 'component_31151';
export function Component31151({ value = 31151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31151, 'data-value': derived.doubled }, children);
}
export default Component31151;
