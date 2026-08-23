import React from 'react';
const LABEL_7233 = 'component_7233';
export function Component7233({ value = 7233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7233, 'data-value': derived.doubled }, children);
}
export default Component7233;
