import React from 'react';
const LABEL_3020 = 'component_3020';
export function Component3020({ value = 3020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3020, 'data-value': derived.doubled }, children);
}
export default Component3020;
