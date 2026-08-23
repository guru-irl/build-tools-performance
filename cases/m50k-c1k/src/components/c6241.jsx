import React from 'react';
const LABEL_6241 = 'component_6241';
export function Component6241({ value = 6241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6241, 'data-value': derived.doubled }, children);
}
export default Component6241;
