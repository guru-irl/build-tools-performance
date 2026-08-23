import React from 'react';
const LABEL_22581 = 'component_22581';
export function Component22581({ value = 22581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22581, 'data-value': derived.doubled }, children);
}
export default Component22581;
