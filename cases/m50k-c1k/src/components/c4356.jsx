import React from 'react';
const LABEL_4356 = 'component_4356';
export function Component4356({ value = 4356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4356, 'data-value': derived.doubled }, children);
}
export default Component4356;
