import React from 'react';
const LABEL_1900 = 'component_1900';
export function Component1900({ value = 1900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1900, 'data-value': derived.doubled }, children);
}
export default Component1900;
