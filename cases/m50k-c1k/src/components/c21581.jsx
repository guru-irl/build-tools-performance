import React from 'react';
const LABEL_21581 = 'component_21581';
export function Component21581({ value = 21581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21581, 'data-value': derived.doubled }, children);
}
export default Component21581;
