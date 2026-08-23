import React from 'react';
const LABEL_12200 = 'component_12200';
export function Component12200({ value = 12200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12200, 'data-value': derived.doubled }, children);
}
export default Component12200;
