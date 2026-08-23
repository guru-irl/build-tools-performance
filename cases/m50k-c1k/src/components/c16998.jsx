import React from 'react';
const LABEL_16998 = 'component_16998';
export function Component16998({ value = 16998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16998, 'data-value': derived.doubled }, children);
}
export default Component16998;
