import React from 'react';
const LABEL_23366 = 'component_23366';
export function Component23366({ value = 23366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23366, 'data-value': derived.doubled }, children);
}
export default Component23366;
