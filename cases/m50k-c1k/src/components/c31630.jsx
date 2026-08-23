import React from 'react';
const LABEL_31630 = 'component_31630';
export function Component31630({ value = 31630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31630, 'data-value': derived.doubled }, children);
}
export default Component31630;
