import React from 'react';
const LABEL_0 = 'component_0';
export function Component0({ value = 0, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_0, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_0, 'data-value': derived.doubled }, children);
}
export default Component0;
