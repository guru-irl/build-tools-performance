import React from 'react';
const LABEL_7342 = 'component_7342';
export function Component7342({ value = 7342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7342, 'data-value': derived.doubled }, children);
}
export default Component7342;
