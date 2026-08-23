import React from 'react';
const LABEL_16356 = 'component_16356';
export function Component16356({ value = 16356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16356, 'data-value': derived.doubled }, children);
}
export default Component16356;
