import React from 'react';
const LABEL_236 = 'component_236';
export function Component236({ value = 236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_236, 'data-value': derived.doubled }, children);
}
export default Component236;
