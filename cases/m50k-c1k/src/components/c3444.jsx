import React from 'react';
const LABEL_3444 = 'component_3444';
export function Component3444({ value = 3444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3444, 'data-value': derived.doubled }, children);
}
export default Component3444;
