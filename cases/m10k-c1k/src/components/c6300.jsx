import React from 'react';
const LABEL_6300 = 'component_6300';
export function Component6300({ value = 6300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6300, 'data-value': derived.doubled }, children);
}
export default Component6300;
