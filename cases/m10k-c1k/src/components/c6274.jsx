import React from 'react';
const LABEL_6274 = 'component_6274';
export function Component6274({ value = 6274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6274, 'data-value': derived.doubled }, children);
}
export default Component6274;
