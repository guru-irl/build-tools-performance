import React from 'react';
const LABEL_5949 = 'component_5949';
export function Component5949({ value = 5949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5949, 'data-value': derived.doubled }, children);
}
export default Component5949;
