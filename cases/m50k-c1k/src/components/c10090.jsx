import React from 'react';
const LABEL_10090 = 'component_10090';
export function Component10090({ value = 10090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10090, 'data-value': derived.doubled }, children);
}
export default Component10090;
