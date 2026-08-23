import React from 'react';
const LABEL_1579 = 'component_1579';
export function Component1579({ value = 1579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1579, 'data-value': derived.doubled }, children);
}
export default Component1579;
