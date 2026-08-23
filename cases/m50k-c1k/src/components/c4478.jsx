import React from 'react';
const LABEL_4478 = 'component_4478';
export function Component4478({ value = 4478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4478, 'data-value': derived.doubled }, children);
}
export default Component4478;
