import React from 'react';
const LABEL_34235 = 'component_34235';
export function Component34235({ value = 34235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34235, 'data-value': derived.doubled }, children);
}
export default Component34235;
