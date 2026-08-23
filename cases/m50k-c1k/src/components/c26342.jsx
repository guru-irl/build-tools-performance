import React from 'react';
const LABEL_26342 = 'component_26342';
export function Component26342({ value = 26342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26342, 'data-value': derived.doubled }, children);
}
export default Component26342;
