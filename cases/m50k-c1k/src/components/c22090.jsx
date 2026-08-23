import React from 'react';
const LABEL_22090 = 'component_22090';
export function Component22090({ value = 22090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22090, 'data-value': derived.doubled }, children);
}
export default Component22090;
