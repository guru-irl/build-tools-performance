import React from 'react';
const LABEL_40342 = 'component_40342';
export function Component40342({ value = 40342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40342, 'data-value': derived.doubled }, children);
}
export default Component40342;
