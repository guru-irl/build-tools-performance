import React from 'react';
const LABEL_13258 = 'component_13258';
export function Component13258({ value = 13258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13258, 'data-value': derived.doubled }, children);
}
export default Component13258;
