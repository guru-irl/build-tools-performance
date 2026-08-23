import React from 'react';
const LABEL_36000 = 'component_36000';
export function Component36000({ value = 36000, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36000, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36000, 'data-value': derived.doubled }, children);
}
export default Component36000;
