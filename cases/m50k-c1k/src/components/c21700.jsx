import React from 'react';
const LABEL_21700 = 'component_21700';
export function Component21700({ value = 21700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21700, 'data-value': derived.doubled }, children);
}
export default Component21700;
