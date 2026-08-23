import React from 'react';
const LABEL_15366 = 'component_15366';
export function Component15366({ value = 15366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15366, 'data-value': derived.doubled }, children);
}
export default Component15366;
