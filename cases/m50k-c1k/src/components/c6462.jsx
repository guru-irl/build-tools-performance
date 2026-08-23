import React from 'react';
const LABEL_6462 = 'component_6462';
export function Component6462({ value = 6462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6462, 'data-value': derived.doubled }, children);
}
export default Component6462;
