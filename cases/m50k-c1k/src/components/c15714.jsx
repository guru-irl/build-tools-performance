import React from 'react';
const LABEL_15714 = 'component_15714';
export function Component15714({ value = 15714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15714, 'data-value': derived.doubled }, children);
}
export default Component15714;
