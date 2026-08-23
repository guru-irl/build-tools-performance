import React from 'react';
const LABEL_45356 = 'component_45356';
export function Component45356({ value = 45356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45356, 'data-value': derived.doubled }, children);
}
export default Component45356;
