import React from 'react';
const LABEL_44273 = 'component_44273';
export function Component44273({ value = 44273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44273, 'data-value': derived.doubled }, children);
}
export default Component44273;
