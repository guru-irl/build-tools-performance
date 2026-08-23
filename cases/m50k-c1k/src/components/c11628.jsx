import React from 'react';
const LABEL_11628 = 'component_11628';
export function Component11628({ value = 11628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11628, 'data-value': derived.doubled }, children);
}
export default Component11628;
