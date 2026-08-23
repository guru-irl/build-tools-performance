import React from 'react';
const LABEL_37356 = 'component_37356';
export function Component37356({ value = 37356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37356, 'data-value': derived.doubled }, children);
}
export default Component37356;
