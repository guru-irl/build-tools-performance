import React from 'react';
const LABEL_29090 = 'component_29090';
export function Component29090({ value = 29090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29090, 'data-value': derived.doubled }, children);
}
export default Component29090;
