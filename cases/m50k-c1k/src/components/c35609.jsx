import React from 'react';
const LABEL_35609 = 'component_35609';
export function Component35609({ value = 35609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35609, 'data-value': derived.doubled }, children);
}
export default Component35609;
