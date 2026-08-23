import React from 'react';
const LABEL_13992 = 'component_13992';
export function Component13992({ value = 13992, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13992, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13992, 'data-value': derived.doubled }, children);
}
export default Component13992;
