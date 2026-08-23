import React from 'react';
const LABEL_6788 = 'component_6788';
export function Component6788({ value = 6788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6788, 'data-value': derived.doubled }, children);
}
export default Component6788;
