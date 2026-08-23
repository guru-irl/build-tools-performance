import React from 'react';
const LABEL_22144 = 'component_22144';
export function Component22144({ value = 22144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22144, 'data-value': derived.doubled }, children);
}
export default Component22144;
