import React from 'react';
const LABEL_13520 = 'component_13520';
export function Component13520({ value = 13520, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13520, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13520, 'data-value': derived.doubled }, children);
}
export default Component13520;
