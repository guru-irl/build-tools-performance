import React from 'react';
const LABEL_24307 = 'component_24307';
export function Component24307({ value = 24307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24307, 'data-value': derived.doubled }, children);
}
export default Component24307;
