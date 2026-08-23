import React from 'react';
const LABEL_12579 = 'component_12579';
export function Component12579({ value = 12579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12579, 'data-value': derived.doubled }, children);
}
export default Component12579;
