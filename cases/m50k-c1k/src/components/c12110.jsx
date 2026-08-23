import React from 'react';
const LABEL_12110 = 'component_12110';
export function Component12110({ value = 12110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12110, 'data-value': derived.doubled }, children);
}
export default Component12110;
