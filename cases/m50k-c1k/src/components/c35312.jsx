import React from 'react';
const LABEL_35312 = 'component_35312';
export function Component35312({ value = 35312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35312, 'data-value': derived.doubled }, children);
}
export default Component35312;
