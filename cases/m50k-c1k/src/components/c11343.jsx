import React from 'react';
const LABEL_11343 = 'component_11343';
export function Component11343({ value = 11343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11343, 'data-value': derived.doubled }, children);
}
export default Component11343;
