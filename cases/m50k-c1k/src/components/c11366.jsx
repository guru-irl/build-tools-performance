import React from 'react';
const LABEL_11366 = 'component_11366';
export function Component11366({ value = 11366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11366, 'data-value': derived.doubled }, children);
}
export default Component11366;
