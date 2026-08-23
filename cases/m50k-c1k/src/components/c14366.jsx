import React from 'react';
const LABEL_14366 = 'component_14366';
export function Component14366({ value = 14366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14366, 'data-value': derived.doubled }, children);
}
export default Component14366;
