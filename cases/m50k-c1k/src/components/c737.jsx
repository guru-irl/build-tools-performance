import React from 'react';
const LABEL_737 = 'component_737';
export function Component737({ value = 737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_737, 'data-value': derived.doubled }, children);
}
export default Component737;
