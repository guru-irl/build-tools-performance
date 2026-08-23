import React from 'react';
const LABEL_16355 = 'component_16355';
export function Component16355({ value = 16355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16355, 'data-value': derived.doubled }, children);
}
export default Component16355;
