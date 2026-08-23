import React from 'react';
const LABEL_12998 = 'component_12998';
export function Component12998({ value = 12998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12998, 'data-value': derived.doubled }, children);
}
export default Component12998;
