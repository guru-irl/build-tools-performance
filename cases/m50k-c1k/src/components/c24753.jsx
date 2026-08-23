import React from 'react';
const LABEL_24753 = 'component_24753';
export function Component24753({ value = 24753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24753, 'data-value': derived.doubled }, children);
}
export default Component24753;
