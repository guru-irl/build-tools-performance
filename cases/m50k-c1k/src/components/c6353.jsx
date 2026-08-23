import React from 'react';
const LABEL_6353 = 'component_6353';
export function Component6353({ value = 6353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6353, 'data-value': derived.doubled }, children);
}
export default Component6353;
