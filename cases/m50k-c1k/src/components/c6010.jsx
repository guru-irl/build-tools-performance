import React from 'react';
const LABEL_6010 = 'component_6010';
export function Component6010({ value = 6010, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6010, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6010, 'data-value': derived.doubled }, children);
}
export default Component6010;
