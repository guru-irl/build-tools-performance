import React from 'react';
const LABEL_6929 = 'component_6929';
export function Component6929({ value = 6929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6929, 'data-value': derived.doubled }, children);
}
export default Component6929;
