import React from 'react';
const LABEL_35490 = 'component_35490';
export function Component35490({ value = 35490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35490, 'data-value': derived.doubled }, children);
}
export default Component35490;
