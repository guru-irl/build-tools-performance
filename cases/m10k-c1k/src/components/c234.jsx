import React from 'react';
const LABEL_234 = 'component_234';
export function Component234({ value = 234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_234, 'data-value': derived.doubled }, children);
}
export default Component234;
