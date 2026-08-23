import React from 'react';
const LABEL_23424 = 'component_23424';
export function Component23424({ value = 23424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23424, 'data-value': derived.doubled }, children);
}
export default Component23424;
