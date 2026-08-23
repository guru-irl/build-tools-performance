import React from 'react';
const LABEL_6668 = 'component_6668';
export function Component6668({ value = 6668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6668, 'data-value': derived.doubled }, children);
}
export default Component6668;
