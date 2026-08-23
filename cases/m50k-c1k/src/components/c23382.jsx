import React from 'react';
const LABEL_23382 = 'component_23382';
export function Component23382({ value = 23382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23382, 'data-value': derived.doubled }, children);
}
export default Component23382;
