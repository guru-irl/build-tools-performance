import React from 'react';
const LABEL_19581 = 'component_19581';
export function Component19581({ value = 19581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19581, 'data-value': derived.doubled }, children);
}
export default Component19581;
