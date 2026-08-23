import React from 'react';
const LABEL_19992 = 'component_19992';
export function Component19992({ value = 19992, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19992, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19992, 'data-value': derived.doubled }, children);
}
export default Component19992;
