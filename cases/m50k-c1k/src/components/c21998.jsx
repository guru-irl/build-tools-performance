import React from 'react';
const LABEL_21998 = 'component_21998';
export function Component21998({ value = 21998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21998, 'data-value': derived.doubled }, children);
}
export default Component21998;
