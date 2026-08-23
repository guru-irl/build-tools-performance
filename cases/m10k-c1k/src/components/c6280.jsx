import React from 'react';
const LABEL_6280 = 'component_6280';
export function Component6280({ value = 6280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6280, 'data-value': derived.doubled }, children);
}
export default Component6280;
