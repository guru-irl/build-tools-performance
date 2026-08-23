import React from 'react';
const LABEL_36090 = 'component_36090';
export function Component36090({ value = 36090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36090, 'data-value': derived.doubled }, children);
}
export default Component36090;
