import React from 'react';
const LABEL_36801 = 'component_36801';
export function Component36801({ value = 36801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36801, 'data-value': derived.doubled }, children);
}
export default Component36801;
