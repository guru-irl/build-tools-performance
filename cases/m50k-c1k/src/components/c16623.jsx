import React from 'react';
const LABEL_16623 = 'component_16623';
export function Component16623({ value = 16623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16623, 'data-value': derived.doubled }, children);
}
export default Component16623;
