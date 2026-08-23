import React from 'react';
const LABEL_6450 = 'component_6450';
export function Component6450({ value = 6450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6450, 'data-value': derived.doubled }, children);
}
export default Component6450;
