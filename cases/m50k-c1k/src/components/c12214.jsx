import React from 'react';
const LABEL_12214 = 'component_12214';
export function Component12214({ value = 12214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12214, 'data-value': derived.doubled }, children);
}
export default Component12214;
