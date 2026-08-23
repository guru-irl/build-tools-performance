import React from 'react';
const LABEL_28342 = 'component_28342';
export function Component28342({ value = 28342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28342, 'data-value': derived.doubled }, children);
}
export default Component28342;
