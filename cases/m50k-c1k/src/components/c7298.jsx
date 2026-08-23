import React from 'react';
const LABEL_7298 = 'component_7298';
export function Component7298({ value = 7298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7298, 'data-value': derived.doubled }, children);
}
export default Component7298;
