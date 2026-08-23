import React from 'react';
const LABEL_7873 = 'component_7873';
export function Component7873({ value = 7873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7873, 'data-value': derived.doubled }, children);
}
export default Component7873;
