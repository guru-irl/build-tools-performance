import React from 'react';
const LABEL_16385 = 'component_16385';
export function Component16385({ value = 16385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16385, 'data-value': derived.doubled }, children);
}
export default Component16385;
