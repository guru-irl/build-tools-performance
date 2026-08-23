import React from 'react';
const LABEL_12366 = 'component_12366';
export function Component12366({ value = 12366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12366, 'data-value': derived.doubled }, children);
}
export default Component12366;
