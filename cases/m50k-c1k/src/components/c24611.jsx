import React from 'react';
const LABEL_24611 = 'component_24611';
export function Component24611({ value = 24611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24611, 'data-value': derived.doubled }, children);
}
export default Component24611;
