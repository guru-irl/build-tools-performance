import React from 'react';
const LABEL_23016 = 'component_23016';
export function Component23016({ value = 23016, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23016, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23016, 'data-value': derived.doubled }, children);
}
export default Component23016;
