import React from 'react';
const LABEL_24581 = 'component_24581';
export function Component24581({ value = 24581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24581, 'data-value': derived.doubled }, children);
}
export default Component24581;
