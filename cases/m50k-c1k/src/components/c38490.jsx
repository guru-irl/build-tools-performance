import React from 'react';
const LABEL_38490 = 'component_38490';
export function Component38490({ value = 38490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38490, 'data-value': derived.doubled }, children);
}
export default Component38490;
