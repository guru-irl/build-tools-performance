import React from 'react';
const LABEL_10342 = 'component_10342';
export function Component10342({ value = 10342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10342, 'data-value': derived.doubled }, children);
}
export default Component10342;
