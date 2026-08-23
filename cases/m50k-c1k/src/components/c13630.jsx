import React from 'react';
const LABEL_13630 = 'component_13630';
export function Component13630({ value = 13630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13630, 'data-value': derived.doubled }, children);
}
export default Component13630;
