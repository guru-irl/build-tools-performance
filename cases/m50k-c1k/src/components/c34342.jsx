import React from 'react';
const LABEL_34342 = 'component_34342';
export function Component34342({ value = 34342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34342, 'data-value': derived.doubled }, children);
}
export default Component34342;
