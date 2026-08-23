import React from 'react';
const LABEL_35366 = 'component_35366';
export function Component35366({ value = 35366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35366, 'data-value': derived.doubled }, children);
}
export default Component35366;
