import React from 'react';
const LABEL_29713 = 'component_29713';
export function Component29713({ value = 29713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29713, 'data-value': derived.doubled }, children);
}
export default Component29713;
