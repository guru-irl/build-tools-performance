import React from 'react';
const LABEL_36236 = 'component_36236';
export function Component36236({ value = 36236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36236, 'data-value': derived.doubled }, children);
}
export default Component36236;
