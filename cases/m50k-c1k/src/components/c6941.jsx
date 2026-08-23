import React from 'react';
const LABEL_6941 = 'component_6941';
export function Component6941({ value = 6941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6941, 'data-value': derived.doubled }, children);
}
export default Component6941;
