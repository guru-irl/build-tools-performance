import React from 'react';
const LABEL_16628 = 'component_16628';
export function Component16628({ value = 16628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16628, 'data-value': derived.doubled }, children);
}
export default Component16628;
