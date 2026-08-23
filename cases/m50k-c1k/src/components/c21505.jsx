import React from 'react';
const LABEL_21505 = 'component_21505';
export function Component21505({ value = 21505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21505, 'data-value': derived.doubled }, children);
}
export default Component21505;
