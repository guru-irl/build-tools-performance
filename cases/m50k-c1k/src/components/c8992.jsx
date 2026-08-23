import React from 'react';
const LABEL_8992 = 'component_8992';
export function Component8992({ value = 8992, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8992, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8992, 'data-value': derived.doubled }, children);
}
export default Component8992;
