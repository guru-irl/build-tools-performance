import React from 'react';
const LABEL_30652 = 'component_30652';
export function Component30652({ value = 30652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30652, 'data-value': derived.doubled }, children);
}
export default Component30652;
