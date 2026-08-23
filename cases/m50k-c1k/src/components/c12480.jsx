import React from 'react';
const LABEL_12480 = 'component_12480';
export function Component12480({ value = 12480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12480, 'data-value': derived.doubled }, children);
}
export default Component12480;
