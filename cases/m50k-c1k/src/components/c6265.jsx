import React from 'react';
const LABEL_6265 = 'component_6265';
export function Component6265({ value = 6265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6265, 'data-value': derived.doubled }, children);
}
export default Component6265;
