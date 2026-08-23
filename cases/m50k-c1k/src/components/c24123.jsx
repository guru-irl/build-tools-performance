import React from 'react';
const LABEL_24123 = 'component_24123';
export function Component24123({ value = 24123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24123, 'data-value': derived.doubled }, children);
}
export default Component24123;
