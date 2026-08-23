import React from 'react';
const LABEL_12973 = 'component_12973';
export function Component12973({ value = 12973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12973, 'data-value': derived.doubled }, children);
}
export default Component12973;
