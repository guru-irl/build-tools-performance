import React from 'react';
const LABEL_46104 = 'component_46104';
export function Component46104({ value = 46104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46104, 'data-value': derived.doubled }, children);
}
export default Component46104;
