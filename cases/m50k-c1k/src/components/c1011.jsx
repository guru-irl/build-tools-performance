import React from 'react';
const LABEL_1011 = 'component_1011';
export function Component1011({ value = 1011, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1011, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1011, 'data-value': derived.doubled }, children);
}
export default Component1011;
