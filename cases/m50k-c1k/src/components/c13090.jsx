import React from 'react';
const LABEL_13090 = 'component_13090';
export function Component13090({ value = 13090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13090, 'data-value': derived.doubled }, children);
}
export default Component13090;
