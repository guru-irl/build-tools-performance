import React from 'react';
const LABEL_20189 = 'component_20189';
export function Component20189({ value = 20189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20189, 'data-value': derived.doubled }, children);
}
export default Component20189;
