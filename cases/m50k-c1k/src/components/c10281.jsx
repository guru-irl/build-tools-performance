import React from 'react';
const LABEL_10281 = 'component_10281';
export function Component10281({ value = 10281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10281, 'data-value': derived.doubled }, children);
}
export default Component10281;
