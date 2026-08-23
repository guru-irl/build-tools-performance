import React from 'react';
const LABEL_5216 = 'component_5216';
export function Component5216({ value = 5216, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5216, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5216, 'data-value': derived.doubled }, children);
}
export default Component5216;
