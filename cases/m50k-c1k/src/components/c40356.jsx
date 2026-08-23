import React from 'react';
const LABEL_40356 = 'component_40356';
export function Component40356({ value = 40356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40356, 'data-value': derived.doubled }, children);
}
export default Component40356;
