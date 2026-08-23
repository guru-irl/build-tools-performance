import React from 'react';
const LABEL_3042 = 'component_3042';
export function Component3042({ value = 3042, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3042, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3042, 'data-value': derived.doubled }, children);
}
export default Component3042;
