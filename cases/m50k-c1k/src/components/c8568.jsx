import React from 'react';
const LABEL_8568 = 'component_8568';
export function Component8568({ value = 8568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8568, 'data-value': derived.doubled }, children);
}
export default Component8568;
