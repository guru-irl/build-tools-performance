import React from 'react';
const LABEL_1377 = 'component_1377';
export function Component1377({ value = 1377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1377, 'data-value': derived.doubled }, children);
}
export default Component1377;
