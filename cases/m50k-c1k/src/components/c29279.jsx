import React from 'react';
const LABEL_29279 = 'component_29279';
export function Component29279({ value = 29279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29279, 'data-value': derived.doubled }, children);
}
export default Component29279;
