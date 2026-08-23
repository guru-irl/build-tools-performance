import React from 'react';
const LABEL_6233 = 'component_6233';
export function Component6233({ value = 6233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6233, 'data-value': derived.doubled }, children);
}
export default Component6233;
