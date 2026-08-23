import React from 'react';
const LABEL_12949 = 'component_12949';
export function Component12949({ value = 12949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12949, 'data-value': derived.doubled }, children);
}
export default Component12949;
