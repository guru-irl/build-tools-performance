import React from 'react';
const LABEL_10241 = 'component_10241';
export function Component10241({ value = 10241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10241, 'data-value': derived.doubled }, children);
}
export default Component10241;
