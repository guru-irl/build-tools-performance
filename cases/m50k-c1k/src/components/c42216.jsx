import React from 'react';
const LABEL_42216 = 'component_42216';
export function Component42216({ value = 42216, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42216, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42216, 'data-value': derived.doubled }, children);
}
export default Component42216;
