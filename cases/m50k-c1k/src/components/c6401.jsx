import React from 'react';
const LABEL_6401 = 'component_6401';
export function Component6401({ value = 6401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6401, 'data-value': derived.doubled }, children);
}
export default Component6401;
