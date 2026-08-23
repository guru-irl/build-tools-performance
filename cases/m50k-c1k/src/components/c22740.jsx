import React from 'react';
const LABEL_22740 = 'component_22740';
export function Component22740({ value = 22740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22740, 'data-value': derived.doubled }, children);
}
export default Component22740;
