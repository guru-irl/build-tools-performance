import React from 'react';
const LABEL_1075 = 'component_1075';
export function Component1075({ value = 1075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1075, 'data-value': derived.doubled }, children);
}
export default Component1075;
