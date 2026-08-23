import React from 'react';
const LABEL_21946 = 'component_21946';
export function Component21946({ value = 21946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21946, 'data-value': derived.doubled }, children);
}
export default Component21946;
