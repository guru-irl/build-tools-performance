import React from 'react';
const LABEL_13432 = 'component_13432';
export function Component13432({ value = 13432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13432, 'data-value': derived.doubled }, children);
}
export default Component13432;
