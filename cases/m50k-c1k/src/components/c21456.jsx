import React from 'react';
const LABEL_21456 = 'component_21456';
export function Component21456({ value = 21456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21456, 'data-value': derived.doubled }, children);
}
export default Component21456;
