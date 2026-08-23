import React from 'react';
const LABEL_10992 = 'component_10992';
export function Component10992({ value = 10992, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10992, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10992, 'data-value': derived.doubled }, children);
}
export default Component10992;
