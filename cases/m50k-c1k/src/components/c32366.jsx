import React from 'react';
const LABEL_32366 = 'component_32366';
export function Component32366({ value = 32366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32366, 'data-value': derived.doubled }, children);
}
export default Component32366;
