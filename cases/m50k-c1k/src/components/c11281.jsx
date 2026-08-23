import React from 'react';
const LABEL_11281 = 'component_11281';
export function Component11281({ value = 11281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11281, 'data-value': derived.doubled }, children);
}
export default Component11281;
