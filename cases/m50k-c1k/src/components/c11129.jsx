import React from 'react';
const LABEL_11129 = 'component_11129';
export function Component11129({ value = 11129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11129, 'data-value': derived.doubled }, children);
}
export default Component11129;
