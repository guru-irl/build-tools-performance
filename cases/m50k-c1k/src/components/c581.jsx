import React from 'react';
const LABEL_581 = 'component_581';
export function Component581({ value = 581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_581, 'data-value': derived.doubled }, children);
}
export default Component581;
