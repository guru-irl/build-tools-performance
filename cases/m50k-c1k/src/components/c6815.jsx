import React from 'react';
const LABEL_6815 = 'component_6815';
export function Component6815({ value = 6815, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6815, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6815, 'data-value': derived.doubled }, children);
}
export default Component6815;
