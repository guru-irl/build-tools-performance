import React from 'react';
const LABEL_4243 = 'component_4243';
export function Component4243({ value = 4243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4243, 'data-value': derived.doubled }, children);
}
export default Component4243;
