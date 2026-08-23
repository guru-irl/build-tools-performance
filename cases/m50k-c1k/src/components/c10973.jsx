import React from 'react';
const LABEL_10973 = 'component_10973';
export function Component10973({ value = 10973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10973, 'data-value': derived.doubled }, children);
}
export default Component10973;
