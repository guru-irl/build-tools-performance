import React from 'react';
const LABEL_1652 = 'component_1652';
export function Component1652({ value = 1652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1652, 'data-value': derived.doubled }, children);
}
export default Component1652;
