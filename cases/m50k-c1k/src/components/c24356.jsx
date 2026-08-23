import React from 'react';
const LABEL_24356 = 'component_24356';
export function Component24356({ value = 24356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24356, 'data-value': derived.doubled }, children);
}
export default Component24356;
