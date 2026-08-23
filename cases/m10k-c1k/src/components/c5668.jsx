import React from 'react';
const LABEL_5668 = 'component_5668';
export function Component5668({ value = 5668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5668, 'data-value': derived.doubled }, children);
}
export default Component5668;
