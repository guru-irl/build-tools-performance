import React from 'react';
const LABEL_16470 = 'component_16470';
export function Component16470({ value = 16470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16470, 'data-value': derived.doubled }, children);
}
export default Component16470;
