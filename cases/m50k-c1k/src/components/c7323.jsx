import React from 'react';
const LABEL_7323 = 'component_7323';
export function Component7323({ value = 7323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7323, 'data-value': derived.doubled }, children);
}
export default Component7323;
