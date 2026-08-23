import React from 'react';
const LABEL_12774 = 'component_12774';
export function Component12774({ value = 12774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12774, 'data-value': derived.doubled }, children);
}
export default Component12774;
