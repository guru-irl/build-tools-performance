import React from 'react';
const LABEL_6005 = 'component_6005';
export function Component6005({ value = 6005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6005, 'data-value': derived.doubled }, children);
}
export default Component6005;
